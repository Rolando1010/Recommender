import cohere from "cohere-ai";

enum Model {
    COMMAND_MEDIUM_NIGHTLY = "command-medium-nightly",
    COMMAND_XLARGE_20221108 = "command-xlarge-20221108"
}

const askAI = async (model: Model, input: string) => {
    cohere.init(process.env.NEXT_PUBLIC_COHERE_API_KEY || "");
	const response = await cohere.generate({
		model,
		prompt: input,
		max_tokens: 100,
		temperature: 0.8,
		k: 0,
		p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		stop_sequences: ["--"],
		return_likelihoods: 'NONE'
	});
	const { text } = response.body.generations[0];
    return text;
}

export {
    askAI,
    Model
}