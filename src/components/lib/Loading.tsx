import React from "react";

export class Loading extends React.Component<LoadingProps> {
    render() {
        const { value } = this.props;
        return (
            <div className="loading">
                <span className="loading__value">Loading {value}...</span>
            </div>
        );
    }
}

type LoadingProps = {
    value: String;
};
