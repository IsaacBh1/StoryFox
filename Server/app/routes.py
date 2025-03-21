import base64
import io
import uuid
from PIL import Image
from flask import Blueprint, request, jsonify, current_app
from langchain.schema import SystemMessage, HumanMessage, AIMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os
import json
from langchain_google_vertexai.vision_models import VertexAIImageGeneratorChat



main = Blueprint('main', __name__)

load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash-lite",api_key=os.getenv("GEMINI_API_KEY"))

@main.route('/', methods=['GET'])
def index():
    return "Welcome to the LangChain Gemini integration using LangChain directly!"

@main.route('/generate-story', methods=['POST'])
def generate_story():

    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    
    messages = [
        SystemMessage(content="""You are an expert writer creating interactive educational stories for children. Generate a story in English that meets the following criteria:

- Title: Unique and engaging (max 30 characters)
- Cover Image Description: In English, for a portrait-oriented image (3:2 or 9:16) reflecting the story's theme
- Chapters: 3–10 chapters, each with:
  - Chapter Text: 100–500 words in English, tailored to the specified reading level
  - Chapter Image Description: In English, for a square (1:1) image matching the chapter's theme
- Character Descriptions: In English, detailing appearance, clothing, and personality for consistent visuals
- Moral Lesson: Incorporate a clear moral lesson or value, such as honesty, kindness, bravery, perseverance, or respect for others. The lesson should be implied through the narrative and character actions, allowing readers to deduce it naturally and should not be too short.
- Style: Use formal yet simple English vocabulary. Illustrations should be soft, hand-drawn, with warm colors and a magical, dreamlike quality (avoid photorealism or exaggerated anime)

Ensure the output is a valid JSON object without extra comments. Escape double quotes properly using '\\'."""),
        HumanMessage("""{"subject":"fantasy","gender":"Female","reading_level":"Mid"}"""),
        AIMessage("""{"story":{"title":"Emma and the Whispering Tree","cover_image_description":"A young girl with bright eyes and a curious expression stands at the edge of a luminous forest, with glowing plants and a winding path leading into the trees. Soft sunlight filters through the leaves, creating a magical atmosphere.","word_count":1050,"reading_time":"7 minutes","story_value":"Helping the environment makes the world stronger.","characters":{"Layla":"A curious, brave, and kind-hearted 8-year-old girl with long, wavy black hair, large brown eyes, and a warm olive complexion. She wears a simple blue or green dress with embroidered details and sturdy leather sandals.","Jinn":"A small, playful, and wise magical being with a swirling, cloud-like body shifting between blues, greens, and purples. His large, gentle eyes sparkle with starlight, and he enjoys riddles and stories.","Old_Wise_Owl":"A calm and knowledgeable large owl with brown and white feathers, piercing yellow eyes, and small round spectacles. He speaks slowly and offers wisdom to those who seek it."},"chapters":[{"title":"الغابة الساحرة","text":"كانت ليلى، الفتاة الصغيرة ذات الشعر الأسود الطويل، تحب اللعب في الغابة القريبة من منزلها. كانت الغابة مليئة بالأشجار العالية والأزهار الملونة والطيور المغردة. في يوم من الأيام، بينما كانت تستكشف مسارًا جديدًا، رأت ضوءًا ساطعًا يتلألأ بين الأشجار. اقتربت ليلى بحذر، وفجأة، ظهر أمامها طريق مرصوف بالحجارة اللامعة.","image_description":"Layla, with her black hair and blue dress, stands at the entrance of a luminous forest. The trees are tall and glowing, with a path made of shiny stones leading into the woods."},{"title":"لقاء غريب","text":"قررت ليلى أن تسير في الطريق. وبينما كانت تمشي، سمعت صوتًا خافتًا يناديها. نظرت حولها، ورأت شيئًا غريبًا يطير في الهواء. كان هذا الشيء عبارة عن سحابة صغيرة من الدخان الملون، لها عينان كبيرتان تلمعان. \"من أنت؟\" سألت ليلى بخوف. أجاب الصوت: \"أنا جني، وأنتِ في عالم السحر!\"","image_description":"Layla looks up in surprise at a small, colorful Jinn floating in the air. The Jinn is made of swirling smoke and has large, friendly eyes."},{"title":"مهمة الجني","text":"قال الجني: \"أنا بحاجة إلى مساعدتك. لقد سرقت ساحرة شريرة جوهرة السحر، وهي تحافظ على هذا العالم جميلًا. إذا لم نجد الجوهرة، سيسود الظلام\". نظرت ليلى إلى الجني بعينين واسعتين. \"كيف يمكنني المساعدة؟\" سألت. أجاب الجني: \"عليكِ أن تجدي ثلاثة أشياء سحرية، وستساعدك هذه الأشياء في مهمتك\".","image_description":"Layla listens intently to the Jinn, who is explaining his problem. The Jinn is gesturing with his hands as he speaks."},{"title":"العثور على البوصلة","text":"أخذ الجني ليلى إلى مكان سري في الغابة. هناك، وجدوا بئرًا قديمة. قال الجني: \"الشيء الأول هو بوصلة سحرية. ستساعدك على إيجاد الطريق\". نزلت ليلى إلى البئر، ووجدت البوصلة. كانت البوصلة مصنوعة من الذهب الخالص، وكانت تشير دائمًا إلى الاتجاه الصحيح.","image_description":"Layla peers into an old well, with the Jinn floating beside her. The well is surrounded by lush vegetation."},{"title":"مقابلة البومة الحكيمة","text":"اتبعت ليلى البوصلة، وسارت في الغابة. وصلت إلى شجرة ضخمة، وجلست عليها بومة حكيمة. قالت البومة: \"أنتِ تبحثين عن الأشياء السحرية؟\". أجابت ليلى: \"نعم، يا سيدتي\". قالت البومة: \"الشيء الثاني هو ريشة سحرية. ستمنحك القوة والشجاعة\". أعطت البومة ليلى ريشة بيضاء ناعمة.","image_description":"Layla stands before a giant tree, looking up at a wise old owl perched on a branch. The owl has large, yellow eyes."},{"title":"نهر الأحلام","text":"سارت ليلى مع الريشة والبوصلة، إلى أن وصلت إلى نهر جميل. قال الجني: \"الشيء الثالث هو زهرة سحرية. ستساعدك على رؤية الحقيقة\". عبرت ليلى النهر، ووجدت زهرة حمراء متوهجة. عندما لمست الزهرة، رأت صورة الساحرة الشريرة وهي تختبئ في كهف مظلم.","image_description":"Layla stands near a shimmering river, holding the feather and looking at a glowing red flower."}]}}"""),
        HumanMessage(json.dumps(prompt))
    ]

    ai_response = llm.invoke(messages)
    
    jsonContent = ai_response.content.strip()[7:-3].strip()
    return jsonContent
    return jsonify(json.load(ai_response.content["storyMetadata"]))

from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
import base64


@main.route('/generate-image', methods=['POST'])
def generate_image():
    data = request.get_json()
    print("Request Body:", request.get_json())
    prompt = data.get("prompt", "")
    image_name = data.get("image_name", "")  # Get the image name from the client
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    if not image_name:
        return jsonify({"error": "Image name is required"}), 400

    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    contents = prompt
    response = client.models.generate_content(
        model="gemini-2.0-flash-exp-image-generation",
        contents=contents,
        config=types.GenerateContentConfig(
            response_modalities=['Text', 'Image']
        )
    )


    for part in response.candidates[0].content.parts:
        if part.text is not None:
            print(part.text)
        elif part.inline_data is not None:
            image = Image.open(BytesIO((part.inline_data.data)))

            # Save the image with the provided name
            sanitized_name = "".join(c for c in image_name if c.isalnum() or c in (' ', '_', '-')).strip()
            image_path = f'app/static/{sanitized_name}.png'
            image.save(image_path)

            return jsonify({"image_path": image_path})

    return jsonify({"error": "Invalid response from AI"}), 400