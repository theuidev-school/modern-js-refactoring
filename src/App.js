import React, { Component } from 'react';
import { StockSymbol } from './core/symbol';

class App extends Component {
    state = {
        searchSymbol: '',
        isSearching: false,
        results: null,
        failed: false
    };

    render() {
        const { isSearching, failed, searchSymbol, results } = this.state;

        return (
            <div>
                <input value={this.state.searchSymbol}
                       onChange={this.setSearchSymbol}
                       onKeyUp={this.doSearchIfEnter}
                       disabled={isSearching}
                       style={{
                           fontSize: 20
                       }} />

                {
                    isSearching
                        ? <div>"Searching..."</div>
                        : null
                }
                {
                    failed
                        ? <div>{`Failed to fetch ${searchSymbol}`}</div>
                        : null
                }
                {
                    results
                        ? <div>{`Symbol = ${results.symbol}, Price = $${results.price}`}</div>
                        : null
                }
            </div>
        );
    }

    setSearchSymbol = (event) => {
        this.setState({
            searchSymbol: event.target.value
        });
    };

    doSearchIfEnter = (event) => {

        // Enter key
        if (event.keyCode !== 13) {
            return;
        }

        this.searchSymbol(this.state.searchSymbol);
    };

    async searchSymbol(symbol) {
        this.setState({
            isSearching: true,
            failed: false
        });

        try {
            const results = await new StockSymbol(symbol).load();
            this.setState({
                failed: false,
                results
            });
        } catch (e) {
            this.setState({
                failed: true
            });
        } finally {
            this.setState({
                isSearching: false
            });
        }
    }
}

export default App;
