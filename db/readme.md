## Como iniciar o Banco de Dados

Para inicializar o banco de dados local será preciso ter o [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce) e o [docker-compose](https://docs.docker.com/compose/install/) instalados.

Para iniciar um container local com um banco MongoDB sendo executado faça (do mesmo diretório deste readme):

```
docker-compose up
```

Após este comando já será possível realizar a comunicação com o Banco de Dados local.

O próximo passo envolve importar os dados para o BD. Para isto execute (do mesmo diretório deste readme):

```
./import-data.sh
```

Em seguida insira a senha para autenticação no banco de dados.
Por **default** o usuário padrão é **admin** e a senha é **secret**. Neste readme há também mais instruções sobre como ter uma senha personalizada.

Caso o arquivo não tenha permissão de executar, então dê a permissão fazendo:

```
chmod +x import-data.sh
```

Após a execução do arquivo, se nenhum erro tiver acontecido já será possível acessar o banco de dados e realizar consultas na base de dados.

**Neste ponto do tempo seu mongodb (usando docker) já está pronto para uso**. 

Caso algo dê errado ou você queira realizar mudanças na senha default leia o restante deste readme.

Se você quiser realizar consultas manualmente é possível acessar o mongo fazendo:

```
mongo localhost:27017/<db-name> -u <user> -p <password>
```

Obs: Substitua `<db-name>`, `<user>` e `<password>` pelos valores adequados.

### Comandos úteis

Caso você queira parar os containers e remover os volumes execute:

```
docker-compose down --volumes
```

Para visualizar os containers rodando:

```
docker ps
```

ou 

```
docker ps -a
```

Para executar comandos num shell dentro do container:

```
docker exec -it <container_id> sh
```

Para remover um container

```
docker rm <container_id>
```

### Como ter uma senha personalizada

Caso você queira que localmente sua senha seja diferente da default (`secret`) basta criar (no mesmo diretório deste readme) um arquivo chamado `.env` (`touch .env`). Neste arquivo adiciona, só e somente, a seguinte linha:

```
MONGO_INITDB_ROOT_PASSWORD=<sua-senha-legal>
```

Obs: Substitua `<sua-senha-legal>` por uma senha de sua escolha.


