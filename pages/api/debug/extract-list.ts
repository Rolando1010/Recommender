import type { NextApiRequest, NextApiResponse } from "next";
import { extractListFromText } from "src/utils/text";

const text1 = `
Some common technologies that can be used to create a MIDI device include:
-The Java Sound API
-The Open Sound Control (OSC) protocol
-The Audio API
-The MIDI API
Each of these technologies has its own advantages and disadvantages, and the best choice will depend on the specific requirements of your project. For example, the Java Sound API is a good choice if you want to create a device that can be run on multiple platforms, but it
`;

const text2 = `
There are many technologies that you can use to make a recommendation engine. Some common technologies that are used for recommendation engines include:
Machine learning algorithms: Machine learning algorithms can be used to analyze data and make predictions about user preferences. This can be used to make recommendations for products or services that users may be interested in.
Artificial intelligence: AI can be used to analyze data and make decisions in a way that mimics human behavior. This can be used to make recommendations based on
`;

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(extractListFromText(text2));
    return response.status(200).json({});
}