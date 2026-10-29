$env:PATH = "C:\Program Files\nodejs;" + [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")
& npm.cmd run dev -- --host 127.0.0.1 --port 5173
