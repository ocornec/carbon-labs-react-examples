import './App.css';
import {
  Chat,
  Messages,
  Message,
  TextElement,
  EditableTextElement,
  CardElement,
  ChartElement,
  TableElement,
  CodeElement,
  TagListElement,
  ListElement,
  ImageElement,
  LoadingElement,
  ErrorElement,
  CarouselElement,
  LinkListElement,
  MolecularElement,
  FormulaElement,
  FileUploadElement,
} from './AllComponents';
import conversation from './sampleConversation.json';

let loading = false;
function App() {
  return (
    <div className="App">
      <div className="Container">
        <h4>Chat interface</h4>
        <Chat 
          loading={loading}
          onSubmit={(e) => console.log(e)}
          onUserMessageUpdateRequest={(e) => console.log(e)}
          onUserRegenerationRequest={(e) => console.log(e)}
          onUserFeedbackRequest={(e) => console.log(e)}
          onMessageElementSelected={(e) => console.log(e)}
          onChatFullscreenChange={(e) => console.log(e)}
          onChatDockingChange={(e) => console.log(e)}
          onChatClosed={(e) => console.log(e)}
          onHeaderMenuItemSelected={(e) => console.log(e)}
          onUserStreamInterrupt={(e) => console.log(e)}
          onMessageStreamingDone={(e) => console.log(e)}
          onMessageElementTagSelected={(e) => console.log(e)}>
          <Messages slot="messages" user-name="User" agent-name="Watson">
            {conversation.map((message, index) => (
              <Message
                slot="message-items"
                display-name={message.origin === 'User' ? 'You' : 'Watson'}
                slot="message-items"
                key={'message-' + index}
                user-submitted={message.userSubmitted}
                origin={message.origin}
                time-stamp={message.time}
                index={message.index}>
                {message.elements.map((element, subIndex) => {
                  switch (element.type) {
                    case 'text':
                      return (
                        <TextElement
                          slot="message-item-content"
                          content={element.content}></TextElement>
                      );
                      break;
                    case 'highlight-text':
                      return (
                        <TextElement
                          enable-text-highlighting
                          slot="message-item-content"
                          content={element.content}></TextElement>
                      );
                      break;
                    case 'text':
                      return (
                        <TextElement
                          slot="message-item-content"
                          content={element.content}></TextElement>
                      );
                      break;
                    case 'table':
                      return (
                        <TableElement
                          slot="message-item-content"
                          content={element.content}></TableElement>
                      );
                      break;
                    case 'editable-text':
                      return (
                        <EditableTextElement
                          slot="message-item-content"
                          content={element.content}></EditableTextElement>
                      );
                      break;
                    case 'card':
                      return (
                        <CardElement
                          slot="message-item-content"
                          content={element.content}></CardElement>
                      );
                      break;
                    case 'file':
                    case 'audio':
                    case 'video':
                    case 'url':
                      return (
                        <CardElement
                          type={element.type}
                          slot="message-item-content"
                          content={element.content}></CardElement>
                      );
                      break;
                    case 'chart':
                      return (
                        <ChartElement
                          slot="message-item-content"
                          content={element.content}></ChartElement>
                      );
                      break;
                    case 'code':
                      return (
                        <CodeElement
                          slot="message-item-content"
                          content={element.content}></CodeElement>
                      );
                      break;
                    case 'tags':
                      return (
                        <TagListElement
                          slot="message-item-content"
                          content={element.content}></TagListElement>
                      );
                      break;
                    case 'list':
                      return (
                        <ListElement
                          slot="message-item-content"
                          content={element.content}></ListElement>
                      );
                      break;
                    case 'img':
                      return (
                        <ImageElement
                          slot="message-item-content"
                          content={element.content}></ImageElement>
                      );
                      break;
                    case 'loading':
                      return (
                        <LoadingElement
                          slot="message-item-content"
                          content={element.content}></LoadingElement>
                      );
                      break;
                    case 'error':
                      return (
                        <ErrorElement
                          slot="message-item-content"
                          content={element.content}></ErrorElement>
                      );
                      break;
                    case 'carousel':
                      return (
                        <CarouselElement
                          slot="message-item-content"
                          content={element.content}></CarouselElement>
                      );
                      break;
                    case 'link-list':
                      return (
                        <LinkListElement
                          slot="message-item-content"
                          content={element.content}></LinkListElement>
                      );
                      break;
                    case 'molecule':
                      return (
                        <MolecularElement
                          slot="message-item-content"
                          content={element.content}></MolecularElement>
                      );
                      break;
                    case 'formula':
                      return (
                        <FormulaElement
                          slot="message-item-content"
                          content={element.content}></FormulaElement>
                      );
                      break;
                    case 'file-upload':
                      return (
                        <FileUploadElement
                          slot="message-item-content"
                          content={element.content}></FileUploadElement>
                      );
                      break;
                    default:
                      return (
                        <TextElement
                          slot="message-item-content"
                          content={element.content}></TextElement>
                      );
                      break;
                  }
                })}
              </Message>
            ))}
          </Messages>
        </Chat>
      </div>
      <div className="ReactContainer">
        <h4>React Implementation</h4>
        <CodeElement
          max-height={'100vh'}
          content={`<Chat\nuser-name="User"\nagent-name="Watson"\nloading={loading}> \n\t<Messages slot="messages" user-name="User" agent-name="Watson">\n\t\t{conversation.map((message, index)=> (\n\t\t\t<Message slot="message-items"\n\t\t\t\tdisplay-name={message.origin === "User" ? "You" : "Watson"} \n\t\t\t\tslot="message-items" \n\t\t\t\tkey={'message-'+index}\n\t\t\t\tuser-submitted={message.userSubmitted}\n\t\t\t\torigin={message.origin} \n\t\t\t\ttime-stamp={message.time} \n\t\t\t\tindex={message.index}>\n\t\t\t\t\t{message.elements.map((element, subIndex)=> {\n\t\t\t\t\t\tswitch(element.type){\n\t\t\t\t\t\t\tcase 'text':\n\t\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t\t<TextElement\n\t\t\t\t\t\t\t\t\t\tslot="message-item-content" \n\t\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t\t</TextElement>);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'highlight-text':\n\t\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t\t\t<TextElement\n\t\t\t\t\t\t\t\t\t\t\tenable-text-highlighting\n\t\t\t\t\t\t\t\t\t\t\tslot="message-item-content" \n\t\t\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t\t\t</TextElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'text':\n\t\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t\t<TextElement\n\t\t\t\t\t\t\t\t\t\tslot="message-item-content" \n\t\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t\t</TextElement>);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'table':\n\t\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t\t<TableElement\n\t\t\t\t\t\t\t\t\t\tslot="message-item-content" \n\t\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t\t</TableElement>);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'editable-text':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<EditableTextElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</EditableTextElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'card':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<CardElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</CardElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'file':\n\t\t\t\t\t\tcase 'audio':\n\t\t\t\t\t\tcase 'video':\n\t\t\t\t\t\tcase 'url':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<CardElement\n\t\t\t\t\t\t\t\t\ttype={element.type}\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</CardElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'chart':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<ChartElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</ChartElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'code':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<CodeElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</CodeElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'tags':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<TagListElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</TagListElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'list':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<ListElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</ListElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'img':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<ImageElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</ImageElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'loading':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<LoadingElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</LoadingElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'error':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<ErrorElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</ErrorElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'carousel':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<CarouselElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</CarouselElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'link-list':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<LinkListElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</LinkListElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'molecule':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<MolecularElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</MolecularElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'formula':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<FormulaElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</FormulaElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'file-upload':\n\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t<FileUploadElement\n\t\t\t\t\t\t\t\t\tslot="message-item-content"\n\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t</FileUploadElement>);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t\t\t<TextElement\n\t\t\t\t\t\t\t\t\t\tslot="message-item-content" \n\t\t\t\t\t\t\t\t\t\tcontent={element.content}>\n\t\t\t\t\t\t\t\t\t</TextElement>);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t</Message>\n\t\t))}\n\t</Messages>\n</Chat>\``}></CodeElement>
      </div>
      <div className="CodeContainer">
        <h4>Conversation JSON</h4>
        <CodeElement
          max-height={'100vh'}
          content={JSON.stringify(conversation, null, '\t')}></CodeElement>
      </div>
    </div>
  );
}

export default App;
