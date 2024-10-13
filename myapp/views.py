from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def chat(request):
    return render(request, 'myapp/chat.html')

@csrf_exempt
def send_message(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        message = data.get('message', '')
        # In a real app, you'd process the message here
        response = f"Hermes: I've received your message: '{message}'. What else would you like to know?"
        return JsonResponse({'message': response})
    return JsonResponse({'error': 'Invalid request'}, status=400)