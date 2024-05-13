## NeuroScene - AI-Powered 3D Scene Creation

# Overview
Welcome to NeuroScene, a revolutionary AI-powered 3D scene creation tool that's changing the game for creators and developers. As part of the Meta Cerebral Valley Hackathon, our team is pushing the boundaries of what's possible with AI-driven design.

Our goal is to create an intuitive and efficient UI that enables users to create complex 3D scenes with ease. The NeuroScene AI engine will:

Read user minds: Understand user intent and create 3D scenes accordingly
Provide real-time feedback: Offer suggestions and insights to the user
Learn from user corrections: Adapt to their preferences and improve over time

## Technical Details
We're leveraging the following training data to fuel our AI finetuning:
ASCII Rendering: Text-based representations of 3D scenes
Vision-Model-Desc: Descriptions of 3D models and their properties as depicted via local `llava` model
Model Metadata: Additional metadata about the 3D models, such as their specified placements, renderings, etc.

To keep a unified source and a cleanly design we utilize two wedev frameworks
- nextjs server = http://localhost:3000 // our distribution channel
- fastapi = http://localhost:7070 `#` our training server


## Platform Frontend
