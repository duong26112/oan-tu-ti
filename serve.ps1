$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:4173/")
$listener.Start()

Write-Host "Server running at http://localhost:4173"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $path = $context.Request.Url.AbsolutePath
        if ($path -eq "/") { $path = "/index.html" }

        $filePath = Join-Path $root ($path.TrimStart("/") )
        if (-not (Test-Path $filePath -PathType Leaf)) {
            $context.Response.StatusCode = 404
            $context.Response.Close()
            continue
        }

        $content = [IO.File]::ReadAllBytes($filePath)
        $extension = [IO.Path]::GetExtension($filePath).ToLowerInvariant()
        $mimeTypes = @{
            ".html" = "text/html; charset=utf-8"
            ".css" = "text/css; charset=utf-8"
            ".js" = "text/javascript; charset=utf-8"
            ".json" = "application/json; charset=utf-8"
        }

        $context.Response.StatusCode = 200
        $context.Response.ContentType = $mimeTypes[$extension]
        $context.Response.ContentLength64 = $content.Length
        $context.Response.OutputStream.Write($content, 0, $content.Length)
        $context.Response.Close()
    }
    catch {
        break
    }
}
