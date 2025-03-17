from flask import Blueprint, request, jsonify, current_app
from langchain.schema import SystemMessage, HumanMessage, AIMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os
import json


main = Blueprint('main', __name__)

load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash",api_key=os.getenv("GEMINI_API_KEY"))

@main.route('/', methods=['GET'])
def index():
    return "Welcome to the LangChain Gemini integration using LangChain directly!"

@main.route('/generate-story', methods=['POST'])
def chat():

    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    
    messages = [
        SystemMessage(content=""""You are an expert writer and developer of interactive educational content for children. 
Generate an engaging story that is written in Arabic, ensuring that it meets the child's reading level requirements.
Follow these guidelines:

1. **Story Metadata:**
   - **Title:** Create a unique story title (max 30 characters) with a distinct tone.
   - **Cover Image Description:** Provide a detailed description for a portrait-oriented cover image (aspect ratio 3:2 or 9:16; PNG or JPG) that reflects the story content.
   - **Word Count & Estimated Reading Time:** Calculate and include the total word count and an approximate reading time (approximately 1 minute per 150 words).

2. **Chapters:**
   - Divide the story into between 3 and 10 chapters.
   - Each chapter must include:
     - **Chapter Text:** A narrative ranging from 100 to 500 words.
     - **Chapter Image Description:** A detailed description for a square image (aspect ratio 1:1, e.g., 1024x1024 px, later adjusted to 360x400) that reflects the chapter’s theme.
   - Ensure smooth navigation between chapters (e.g., "Next" or "Previous") along with a progress indicator (percentage or progress bar).

3. **Visual Consistency for Characters:**
   - Provide clear descriptive metadata for each character (including physical traits, clothing style, and key personality attributes) to ensure consistent depiction across all images.
   - Include this metadata within the output to avoid any contradictions in character descriptions across chapters.

4. **Additional Requirements:**
   - The story should be engaging, interactive, and educational, designed to spark a love for reading.
   - The narrative must be written in Arabic using formal language with vocabulary simplified to suit the child’s reading level.
   - The text should be inspired by the style of Ghibli, with soft hand-drawn details and warm, natural colors.
   - Avoid photorealism, over-sharpened digital effects, and exaggerated anime styles.
   - Maintain a balance between realism and fantasy to create a magical atmosphere.

Generate the complete story in Arabic, including all metadata, chapters, and detailed character descriptions.

"""),
#         HumanMessage(content="""Use the following parameters to generate the story:

# - Story Subject (prompt from the kid): مغامرة في الغابة المسحورة
# - Child's Gender: أنثى
# - Age: 7 years
# - Reading Level: مبتدئ
# - Desired Story Duration: 5-7 min

# """),
#         AIMessage(content="""{"storyMetadata":{"title":"ليلى في الغابة السحرية","coverImageDescription":"صورة بورتريه (3:2) تُظهر ليلى، فتاة صغيرة ذات شعر أسود طويل وعيون بنية كبيرة، ترتدي فستانًا أزرق فاتحًا منقوشًا بأزهار، واقفة أمام غابة كثيفة تبدو سحرية، مع أشعة شمس ذهبية تخترق الأشجار. الألوان هادئة ودافئة، مع لمسة من الخيال.  النمط رسوم يدوية ناعمة.","wordCount":600,"estimatedReadingTime":"4 دقائق"},"characters":[{"name":"ليلى","description":"فتاة صغيرة ذات شعر أسود طويل وعيون بنية كبيرة، بشرتها بيضاء، ترتدي فستانًا أزرق فاتحًا منقوشًا بأزهار، مرحة، فضولية، شجاعة."},{"name":"الجنية ريم","description":"جنية صغيرة ذات أجنحة لامعة، شعرها ذهبي، عيناها زرقاوان، ترتدي ثوبًا أخضر فاتحًا، لطيفة، حكيمة، مساعدة."}],"chapters":[{"chapterNumber":1,"chapterText":"في يوم مشمس، ذهبت ليلى إلى الغابة الكبيرة قرب منزلها. كانت الغابة جميلة جدًا، مليئة بالأشجار الكبيرة والأزهار الملونة.  رأت ليلى فراشة جميلة تطير، فركضت خلفها.  دخلت ليلى الغابة أكثر فأكثر، حتى وجدت نفسها في مكان غريب، مليء بالأشجار المتلألئة وزهور غريبة.","chapterImageDescription":"صورة مربعة (1:1) تُظهر ليلى وهي تركض في الغابة، محاطة بأشجار كبيرة وأزهار ملونة.  الضوء ساطع، والألوان زاهية ولكنها هادئة.  النمط رسوم يدوية ناعمة."},{"chapterNumber":2,"chapterText":"فجأة، سمعت ليلى صوتًا لطيفًا يقول: \\\"مرحباً بكِ يا ليلى!\\\"  نظرت ليلى حولها، فرأت جنية صغيرة جميلة ذات أجنحة لامعة، اسمها ريم.  قالت ريم: \\\"هذه غابة سحرية، وأنا أحميها.  هل تريدين أن أريكِ جمالها؟\\\"","chapterImageDescription":"صورة مربعة (1:1) تُظهر ليلى وريم معًا، ليلى تبدو مندهشة وريم تبتسم. الخلفية غابة سحرية مع أشجار متلألئة. الألوان دافئة وهادئة."},{"chapterNumber":3,"chapterText":"أخذت ريم ليلى في جولة في الغابة السحرية.  رأتا أزهارًا تتحدث، وشلالات ماء متلألئة، وحيوانات صغيرة لطيفة.  علمت ريم ليلى أسرار الغابة، وكيف تحميها، وأهمية الحفاظ على الطبيعة.  استمتعت ليلى كثيرًا برحلتها مع ريم.","chapterImageDescription":"صورة مربعة (1:1) تُظهر ليلى وريم  يُشاهدان شلالًا صغيرًا في الغابة.  الماء يتلألأ، والألوان هادئة وجميلة.  النمط رسوم يدوية ناعمة."}]}"""),        
        HumanMessage("""{"subject":"رحلة في عالم السحر","gender":"Female","reading_level":"Mid","duration":"7-8 min","Age":"8 years"}"""),
        # AIMessage()
        AIMessage("""```json {"storyMetadata":{"title":"نجمة في عالم السحر","coverImageDescription":"صورة بورتريه (3:2) لفتاة صغيرة اسمها نجمة، ذات شعر أسود طويل وعيون واسعة بنية، ترتدي فستانًا أرجوانيًا لامعًا، تقف أمام بوابة سحرية متوهجة تؤدي إلى عالم مليء بالألوان الزاهية والأشجار الغريبة. الأجواء دافئة وحالمة، بأسلوب رسومات غيبلي الناعمة.","wordCount":1050,"estimatedReadingTime":"7 دقائق"},"characters":[{"name":"نجمة","description":"فتاة فضولية ومرحة، ذات شعر أسود طويل وعيون بنية واسعة، تحب المغامرات والتعرف على أشياء جديدة. ترتدي فستانًا أرجوانيًا لامعًا وحذاءً بنيًا مريحًا."},{"name":"ميمون","description":"قرد صغير ذكي ولطيف، ذو فرو بني فاتح وعينين كبيرتين معبرتين. يرتدي قبعة حمراء صغيرة ويرافق نجمة في رحلتها."},{"name":"ملكة الزهور","description":"امرأة جميلة ذات شعر طويل من الزهور الملونة، ترتدي فستانًا أخضر مصنوعًا من أوراق الشجر. طيبة القلب وحكيمة، تحكم عالم السحر."}],"chapters":[{"chapterNumber":1,"chapterText":"في يوم من الأيام، بينما كانت نجمة تلعب في حديقة منزلها، وجدت بابًا صغيرًا مخفيًا بين الورود. كان الباب يلمع بضوء غريب. فضول نجمة دفعها لفتحه. فجأة، وجدت نفسها في عالم آخر! عالم مليء بالأشجار العملاقة والزهور المتوهجة. لم تكن نجمة خائفة، بل كانت متحمسة لبدء مغامرة جديدة.","chapterImageDescription":"صورة مربعة (1:1) تُظهر نجمة وهي تفتح بابًا صغيرًا سحريًا في حديقة مليئة بالورود الملونة. الباب يضيء بضوء أبيض ساطع، والعالم خلفه يبدو غامضًا ومليئًا بالألوان."},{"chapterNumber":2,"chapterText":"في هذا العالم الجديد، قابلت نجمة قردًا صغيرًا اسمه ميمون. كان ميمون ودودًا جدًا وعرض على نجمة أن يكون مرشدها في هذا العالم الغريب. وافقت نجمة بفرح. بدأ الاثنان رحلتهما معًا، يكتشفان الغابات السحرية والأنهار المتلألئة. ميمون كان يعرف كل شيء عن هذا العالم، وكان يساعد نجمة في تخطي أي صعوبات تواجهها.","chapterImageDescription":"صورة مربعة (1:1) تُظهر نجمة وميمون يسيران معًا في غابة سحرية. الأشجار ضخمة وملونة، والفراشات تحلق حولهما. ميمون يرتدي قبعة حمراء صغيرة ويشير إلى الأمام."},{"chapterNumber":3,"chapterText":"خلال رحلتهما، سمعت نجمة عن ملكة الزهور، حاكمة هذا العالم السحري. قيل إنها طيبة القلب وحكيمة، ويمكنها أن تساعد نجمة في العودة إلى منزلها. قررت نجمة وميمون البحث عن ملكة الزهور. سافرا عبر الجبال العالية والوديان العميقة، حتى وصلا إلى قصرها المصنوع من الزهور.","chapterImageDescription":"صورة مربعة (1:1) تُظهر نجمة وميمون وهما يقفان أمام قصر مصنوع من الزهور الملونة. القصر كبير وجميل، ويحيط به حديقة مليئة بالورود والأشجار المزهرة."},{"chapterNumber":4,"chapterText":"عندما قابلت نجمة ملكة الزهور، رحبت بها بحفاوة. استمعت الملكة إلى قصة نجمة وأعجبت بشجاعتها وفضولها. قررت الملكة مساعدة نجمة في العودة إلى منزلها. أعطتها زهرة سحرية، وقالت لها: \"عندما تشمين رائحة هذه الزهرة، ستعودين إلى المكان الذي أتيت منه\". شكرت نجمة الملكة وميمون، ووعدت بألا تنسى هذه المغامرة أبدًا.","chapterImageDescription":"صورة مربعة (1:1) تُظهر نجمة وهي تتحدث مع ملكة الزهور في قصرها. ملكة الزهور ترتدي فستانًا أخضر مصنوعًا من أوراق الشجر وتحمل زهرة سحرية. ميمون يقف بجانب نجمة وينظر إلى الملكة بإعجاب."},{"chapterNumber":5,"chapterText":"أخذت نجمة الزهرة السحرية وشمت رائحتها. فجأة، اختفى العالم السحري وعادت نجمة إلى حديقة منزلها. كانت الشمس تغرب، وشعرت نجمة أنها كانت غائبة لوقت طويل. لكنها لن تنسى أبدًا رحلتها إلى عالم السحر، والصداقة التي كونتها مع ميمون، ولطف ملكة الزهور. احتفظت نجمة بالزهرة السحرية كتذكار لهذه المغامرة الرائعة.","chapterImageDescription":"صورة مربعة (1:1) تُظهر نجمة وهي تقف في حديقة منزلها، تحمل الزهرة السحرية وتنظر إلى السماء. الشمس تغرب، والأجواء دافئة وهادئة."}]} ```"""),
        # HumanMessage("""IMPORTANT NOTE: the output must be a valid json without any prefix or comments or formatting like "```json or "\n" or "\"", just use plain json ..."""),
        HumanMessage(json.dumps(prompt))
    ]

    # Generate AI response
    ai_response = llm.invoke(messages)
    
    # If needed, you can wrap or process the AIMessage further.
    # Here we assume the AIMessage has a 'content' attribute.
    
    # if "storyMetadata" not in ai_response.content:
    #     return jsonify({"error": "Invalid response from AI"}), 400
    # return ai_response.content
    jsonContent = ai_response.content.strip()[7:-3].strip()
    return jsonContent
    return jsonify(json.load(ai_response.content["storyMetadata"]))
