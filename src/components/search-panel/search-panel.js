import React from "react";
import './search-panel.css';

class SearchPanel extends React.Component {
    render() {
        return (
            <div className="search-panel">
                <hr/>
                <label className="search-panel__label">
                    Поиск тикера:
                    <input
                        className="search-panel__input  ml-1"
                        type="text"
                        placeholder="BTC"
                    />
                </label>

                <span className="search-panel__info">Все тикеры по фильтру: <span
                    className="errorSpan">all tickers</span></span>
                <hr/>
            </div>
        );
    }
}

export default SearchPanel;