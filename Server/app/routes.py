from flask import Blueprint, request, jsonify, current_app
from app.llm import GeminiLLM

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def index():
    return "Welcome to the LangChain Gemini integration!"

@main.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    # Initialize the Gemini LLM with the API key from configuration
    gemini_llm = GeminiLLM(api_key=current_app.config['GEMINI_API_KEY'])
    
    try:
        result = gemini_llm(prompt)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"result": result})
