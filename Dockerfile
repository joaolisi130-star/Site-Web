FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \
    bash \
    curl \
    git \
    ttyd

# cria usuário simples (opcional)
RUN useradd -m user

WORKDIR /home/user

# inicia terminal web
CMD ["ttyd", "-p", "7681", "bash"]
