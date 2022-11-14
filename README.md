# ALURATUBE

**Aluratube** is a web application that agregates [YouTube](https://www.youtube.com/) videos in a timeline screen.

## Technology

-   [Next.JS](https://nextjs.org/)

-   [Supabase](https://supabase.com/)

## Requirements

Minimal requirements follows the list:

-   [NodeJS 18.12.0](https://nodejs.org/)

-   [NPM 8.19.2](https://www.npmjs.com/)

-   [React.JS 18.2.0](https://reactjs.org/)

-   [Next.JS 13.0.2](https://nextjs.org/)

In the development environment, following the [Next.JS linting](https://nextjs.org/docs/basic-features/eslint#eslint-config) configuration instructions should be sufficient for code format and standardization.

-   [Eslint](https://eslint.org/)

-   [Prettier](https://prettier.io/)

Also, an account on the [Supabase](https://supabase.com/) online service is necessary as a database access for the application.

## Building

A number of packages are required by the application during the building. It is mandatory that a minimal [NodeJS](https://nodejs.org/) javascript runtime environment is available on the building machine. Instructions for installation on a number of operating system are provided in their [download site](https://nodejs.org/en/download/).

```bash
# Clone this repository.
git clone "https://github.com/fndaraujo/aluratube.git"

# Enter the cloned repository
cd aluratube

# Install packages.
npm install
```

## Running

For running the application, there is a series of [Next.JS](https://nextjs.org/) scripts for usage in development and [production](https://nextjs.org/docs/deployment) environments.

```bash
# Run the development version.
npm run dev

# Build the optimized production version.
npm run build

# Run the production version.
npm run build
npm run start
```

Using container environments is done with a previously downloaded [Node.JS image](https://hub.docker.com/_/node). Follow the minimal [requirements](#requirements) list for a suitable version of the image to be used.

### Podman container

[Podman](https://podman.io/) is only available in the GNU/Linux distributions. It is possible to run rootless and daemonless containers.

```bash
# Podman does not require root access.
podman run --rm \
     --interactive \
     --tty \
     --name aluratube \
     --mount "type=bind,source=$(pwd)/,target=/usr/src/App/,Z" \
     --workdir "/usr/src/App/" \
     --publish 3000:3000/tcp \
     docker.io/library/node:18.12.0-alpine \
     npm run dev
```

### Docker container

[Docker](https://www.docker.com/) is a daemon that manages container services.

```bash
# Docker requires privileged access to run.
sudo docker run --rm \
     --interactive \
     --tty \
     --name aluratube \
     --mount "type=bind,source=$(pwd)/,target=/usr/src/App/,Z" \
     --workdir "/usr/src/App/" \
     --publish 3000:3000 \
     node:18.12.0-alpine \
     npm run dev
```

## License

See LICENSE.

## Authors

See AUTHORS.md.

## Contributors

See AUTHORS.md.
