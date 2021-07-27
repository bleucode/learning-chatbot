import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions/learningOptions';
import LinkList from './components/LinkList/LinkList';

const config = {
    botName: "LearningBot",
    initialMessages: [
    createChatBotMessage(`Hola, estoy para ayudar. ¿Qué te gustaría aprender?`, {
    widget: "learningOptions",
    }),
],

widgets: [
    {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName:"javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props:{
            options: [
                {
                    text: "Introduction to JS",
                    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                    id: 1,
                },
                {
                    text: "Mozilla JS Guide",
                    url: "https://developer.mozilla.org/en-US/docs/Web/Javascript/Guide"
                }
            ]

        }
    },
],

};

export default config;