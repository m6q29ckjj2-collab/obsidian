#!/bin/sh
# Качает доки для чтения без сети (запускать при наличии интернета).
set -e
cd "$(dirname "$0")"
[ -d fastapi ] || git clone --depth 1 https://github.com/fastapi/fastapi.git
[ -d sqlmodel ] || git clone --depth 1 https://github.com/fastapi/sqlmodel.git
[ -d swagger-ui ] || { mkdir swagger-ui && cd swagger-ui &&
  curl -sLO https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js &&
  curl -sLO https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css; }
