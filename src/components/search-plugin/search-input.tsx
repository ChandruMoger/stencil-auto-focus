import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
@Component({
  tag: 'search-input',
  styleUrl: 'search-input.css',
  shadow: true,
})
export class SearchPlugin {
  private searchInput: HTMLInputElement;

  /** Clear icon color on focus status */
  @State() clearIconColorFocus = false

  /** Search text input value */
  @Prop() value = "";

  /** Unique id to identify the element for testing */
  @Prop() dataTestId!: string;

  /** Placeholder for search input */
  @Prop() placeHolder: string = "Search";

  /**
   * Emitted when clearing the input
   */
  @Event() clearSearch: EventEmitter;

  /**
   * Emitted when onChange and enter
   */
  @Event() searchRequest: EventEmitter;

  protected componentDidLoad() {
    console.log(this.searchInput.getAttribute('data-test-id'))
    this.searchInput.focus();
  }

  private searchOnChange = (e) => {
    this.searchRequest.emit(e.target.value)
  }

  private SearchOnEnter = (event) => {
    if (event.key === 'Enter') {
      event.stopPropagation();
      this.searchRequest.emit(event.target.value)
    }
  }

 render() {
    return (
      <div data-test-id={this.dataTestId} class="items-center flex bg-white border-solid rounded-sm border-gray-300 box-border text-xl border-1 pl-15 pr-12 py-9">
        <input
            type="text"
            ref={el => (this.searchInput = el as HTMLInputElement)}
            data-test-id={`${this.dataTestId}-search-input`}
            class="focus:outline-none border-0 flex-grow w-full pl-15"
            onInput={this.searchOnChange}
            onKeyPress={this.SearchOnEnter}
            value={this.value}
            placeholder={this.placeHolder}
          />
      </div>
    );
  }
}
