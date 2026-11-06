"""
Kuubera Pure Veg - Local Development Server
Serves the website locally at http://localhost:8000
"""

import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("==================================================")
        print("  KUUBERA PURE VEG — LOCAL SERVER RUNNING")
        print(f"  URL: http://localhost:{PORT}")
        print(f"  Serving Directory: {DIRECTORY}")
        print("  Brand: KUUBERA – Where Every Meal Becomes a Royal Experience.")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == '__main__':
    run_server()
