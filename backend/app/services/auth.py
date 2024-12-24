import requests

def verify_cas(ticket: str):
    service_url = ""
    cas_url = f""
    response = requests.get(cas_url)
    if "success" in response.text:
        # Parse and return user details
        return {"name": "John Doe", "student_id": "IIIT12345"}
    return None
