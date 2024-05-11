import requests
import json
import base64

def generate_image(model, prompt, images):
    """
    Generates an image based on the given prompt and model.

    Args:
        model (str): The model to use for image generation.
        prompt (str): The prompt to use for image generation.
        images (list): A list of base64-encoded images to use as input.

    Returns:
        dict: A dictionary containing the generated image.
    """
    url = "http://localhost:11434/api/generate"
    data = {
        "model": model,
        "prompt": prompt,
        "images": images
    }

    response = requests.post(url, json=data)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error generating image: {response.status_code} - {response.text}")

# Example usage
model = "llava"
prompt = "What is in this picture?"
image_path = "/Users/wentingwang/Downloads/aa9ae569.jpeg"
f = open(image_path, "rb")
image_content = f.read()
image_content_encoded = base64.b64encode(image_content).decode('ascii')
print("decode", type(image_content_encoded))
images = [image_content_encoded]
generate_image(model, prompt, images)
