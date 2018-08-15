import * as React from 'react';
import { TextBlock } from '../../Components/Basic/TextBlock';
import { StyleManager } from '../../Styles/StyleManager';
import { DebugOutputFactory } from '../Factories/DebugOutputFactory';
export class TextBlockView extends React.Component {
    render() {
        const { element } = this.props;
        if (!element || !element.isValid) {
            return DebugOutputFactory.createDebugOutputBanner(element.type + '>>' + element.text + ' is not valid', 'error');
        }
        return (React.createElement(TextBlock, { color: StyleManager.getColor(element.color, this.props.theme, element.isSubtle), fontSize: StyleManager.getFontSize(element.size), fontWeight: StyleManager.getFontWeight(element.weight), backgroundColor: 'transparent', textAlign: StyleManager.getTextAlign(element.horizontalAlignment), wrap: StyleManager.getWrap(element.wrap), numberOfLines: element.maxLines, marginTop: this.spacing }, element.text));
    }
    get spacing() {
        if (this.props.index !== undefined && this.props.index > 0) {
            return StyleManager.getSpacing(this.props.element.spacing);
        }
        return 0;
    }
}
