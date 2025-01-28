## Prerequisitos

- [Bun](https://bun.sh/) (Recomendado)
- Node.js 21+ (Si no usas Bun)

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/brayang222/abc-cinematography.git
   cd ABC
   ```

2. **Configurar el Entorno**

   ```bash
   # copia el template env
   cp .env.template .env
   ```

3. **Instalar Dependencias**

   ```bash
   # Using Bun (Recomendado)
   bun install

   # Or using npm
   npm install
   ```

4. **Iniciar el Servidor de Desarrollo**

   ```bash
   # Usando Bun
   bun dev

   # O usando npm
   npm run dev
   ```

Puedes utilizar cualquier empaquetador, you utilicé bun:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Está por defecto en: [http://localhost:3000](http://localhost:3000)

Es necesario el header KEY de TMBD: [TMBD](https://developer.themoviedb.org/reference/intro/getting-started)

Tiene reglas de Eslint y un settings.json para el formateo automático con prettier
