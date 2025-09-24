O Diário Pessoal Mobile App é um app que eu fiz usando React Native + Expo junto com o Supabase. A ideia é simples: um diário pessoal onde dá pra criar, editar e apagar anotações, cada uma com título, descrição e até mídia (foto ou vídeo).

Pra montar tudo usei o Supabase pra login, banco e storage, o Expo ImagePicker pra escolher fotos e vídeos, os Expo Vector Icons pros ícones, TypeScript pra tipagem e o React Navigation pra navegação entre as telas.

O app já tem login/cadastro/logout, lista todas as notas do usuário, permite editar ou excluir, e ainda faz upload de mídia com preview antes de salvar. A interface é limpa: tem um header com botão de sair e outro pra criar nota nova.

Pra rodar, é só clonar o repositório, instalar as dependências, rodar no Expo e escanear o QR Code no celular. No Supabase, precisa criar o projeto, configurar o bucket galeria, criar as tabelas profiles e entries, arrumar as regras de segurança (RLS) e colocar as chaves no supabaseClient.ts.

Detalhes extras: só o dono consegue ver as mídias que ele mesmo subiu, vídeos grandes podem pesar um pouco dependendo do celular e os ícones deixam a navegação mais fácil.
