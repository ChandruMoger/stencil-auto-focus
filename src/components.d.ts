/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SearchInput {
        /**
          * Unique id to identify the element for testing
         */
        "dataTestId": string;
        /**
          * Placeholder for search input
         */
        "placeHolder": string;
        /**
          * Search text input value
         */
        "value": string;
    }
}
declare global {
    interface HTMLSearchInputElement extends Components.SearchInput, HTMLStencilElement {
    }
    var HTMLSearchInputElement: {
        prototype: HTMLSearchInputElement;
        new (): HTMLSearchInputElement;
    };
    interface HTMLElementTagNameMap {
        "search-input": HTMLSearchInputElement;
    }
}
declare namespace LocalJSX {
    interface SearchInput {
        /**
          * Unique id to identify the element for testing
         */
        "dataTestId": string;
        /**
          * Emitted when clearing the input
         */
        "onClearSearch"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when onChange and enter
         */
        "onSearchRequest"?: (event: CustomEvent<any>) => void;
        /**
          * Placeholder for search input
         */
        "placeHolder"?: string;
        /**
          * Search text input value
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "search-input": SearchInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "search-input": LocalJSX.SearchInput & JSXBase.HTMLAttributes<HTMLSearchInputElement>;
        }
    }
}