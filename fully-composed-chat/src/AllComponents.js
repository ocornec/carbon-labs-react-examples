import { createComponent } from '@lit/react';
import React from 'react';
import CLABSChat from '@carbon-labs/ai-chat/es/components/chat/chat.js';
import CLABSHeader from '@carbon-labs/ai-chat/es/components/header/header.js';
import CLABSFooter from '@carbon-labs/ai-chat/es/components/footer/footer.js';
import CLABSMessage from '@carbon-labs/ai-chat/es/components/message/message.js';
import CLABSMessages from '@carbon-labs/ai-chat/es/components/messages/messages.js';
import CLABSEditableTextElement from '@carbon-labs/ai-chat/es/components/editableTextElement/editableTextElement.js';
import CLABSTextElement from '@carbon-labs/ai-chat/es/components/textElement/textElement.js';
import CLABSCardElement from '@carbon-labs/ai-chat/es/components/cardElement/cardElement.js';
import CLABSChartElement from '@carbon-labs/ai-chat/es/components/chartElement/chartElement.js';
import CLABSTableElement from '@carbon-labs/ai-chat/es/components/tableElement/tableElement.js';
import CLABSCodeElement from '@carbon-labs/ai-chat/es/components/codeElement/codeElement.js';
import CLABSTagListElement from '@carbon-labs/ai-chat/es/components/tagListElement/tagListElement.js';
import CLABSListElement from '@carbon-labs/ai-chat/es/components/listElement/listElement.js';
import CLABSImageElement from '@carbon-labs/ai-chat/es/components/imageElement/imageElement.js';
import CLABSLoadingElement from '@carbon-labs/ai-chat/es/components/loadingElement/loadingElement.js';
import CLABSErrorElement from '@carbon-labs/ai-chat/es/components/errorElement/errorElement.js';
import CLABSCarouselElement from '@carbon-labs/ai-chat/es/components/carouselElement/carouselElement.js';
import CLABSLinkListElement from '@carbon-labs/ai-chat/es/components/linkListElement/linkListElement.js';
import CLABSMolecularElement from '@carbon-labs/ai-chat/es/components/molecularElement/molecularElement.js';
import CLABSFormulaElement from '@carbon-labs/ai-chat/es/components/formulaElement/formulaElement.js';
import CLABSFileUploadElement from '@carbon-labs/ai-chat/es/components/fileUploadElement/fileUploadElement.js';

export const Chat = createComponent({
  tagName: 'clabs-chat',
  elementClass: CLABSChat,
  react: React,
  events: {
    onSubmit: 'on-submit',
    onUserMessageUpdateRequest: 'on-user-message-update-request',
    onUserRegenerationRequest: 'on-user-regeneration-request',
    onUserFeedbackRequest: 'on-user-feedback-request',
    onMessageElementSelected: 'on-message-element-selected',
    onChatFullscreenChange: 'on-chat-fullscreen-change',
    onChatDockingChange: 'on-chat-docking-change',
    onChatClosed: 'on-chat-closed',
    onHeaderMenuItemSelected: 'on-header-menu-item-selected',
    onUserStreamInterrupt: 'on-user-stream-interrupt',
    onMessageStreamingDone: 'on-message-streaming-done',
    onMessageElementTagSelected: 'on-message-element-tag-selected',
  },
});

export const Header = createComponent({
  tagName: 'clabs-chat-header',
  elementClass: CLABSHeader,
  react: React,
  events: {},
});

export const Footer = createComponent({
  tagName: 'clabs-chat-footer',
  elementClass: CLABSFooter,
  react: React,
  events: {},
});

export const Message = createComponent({
  tagName: 'clabs-chat-message',
  elementClass: CLABSMessage,
  react: React,
  events: {},
});

export const Messages = createComponent({
  tagName: 'clabs-chat-messages',
  elementClass: CLABSMessages,
  react: React,
  events: {},
});

export const EditableTextElement = createComponent({
  tagName: 'clabs-chat-editable-text',
  elementClass: CLABSEditableTextElement,
  react: React,
  events: {},
});

export const TextElement = createComponent({
  tagName: 'clabs-chat-text',
  elementClass: CLABSTextElement,
  react: React,
  events: {},
});

export const CardElement = createComponent({
  tagName: 'clabs-chat-card',
  elementClass: CLABSCardElement,
  react: React,
  events: {},
});

export const ChartElement = createComponent({
  tagName: 'clabs-chat-chart',
  elementClass: CLABSChartElement,
  react: React,
  events: {},
});

export const TableElement = createComponent({
  tagName: 'clabs-chat-table',
  elementClass: CLABSTableElement,
  react: React,
  events: {},
});

export const CodeElement = createComponent({
  tagName: 'clabs-chat-code',
  elementClass: CLABSCodeElement,
  react: React,
  events: {},
});

export const TagListElement = createComponent({
  tagName: 'clabs-chat-tag-list',
  elementClass: CLABSTagListElement,
  react: React,
  events: {},
});

export const ListElement = createComponent({
  tagName: 'clabs-chat-list',
  elementClass: CLABSListElement,
  react: React,
  events: {},
});

export const ImageElement = createComponent({
  tagName: 'clabs-chat-image',
  elementClass: CLABSImageElement,
  react: React,
  events: {},
});

export const LoadingElement = createComponent({
  tagName: 'clabs-chat-loading',
  elementClass: CLABSLoadingElement,
  react: React,
  events: {},
});

export const ErrorElement = createComponent({
  tagName: 'clabs-chat-error',
  elementClass: CLABSErrorElement,
  react: React,
  events: {},
});

export const CarouselElement = createComponent({
  tagName: 'clabs-chat-carousel',
  elementClass: CLABSCarouselElement,
  react: React,
  events: {},
});

export const LinkListElement = createComponent({
  tagName: 'clabs-chat-link-list',
  elementClass: CLABSLinkListElement,
  react: React,
  events: {},
});

export const MolecularElement = createComponent({
  tagName: 'clabs-chat-molecule',
  elementClass: CLABSMolecularElement,
  react: React,
  events: {},
});

export const FormulaElement = createComponent({
  tagName: 'clabs-chat-formula',
  elementClass: CLABSFormulaElement,
  react: React,
  events: {},
});

export const FileUploadElement = createComponent({
  tagName: 'clabs-chat-file-upload',
  elementClass: CLABSFileUploadElement,
  react: React,
  events: {},
});
