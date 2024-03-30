import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:8000/graphql",
    documents: "**/*.{tsx,ts}",
    ignoreNoDocuments: true,
    generates: {
        "./src/gql/": {
            preset: "client",
            plugins: []
        },
    },
}

export default config;