import React from 'react';
export default class Input extends React.Component {
  render() {
    const { label, value, onChange } = this.props;
    return (
      <div>
        <b>{label}: </b>
        <input value={value} onChange={onChange} />
      </div>
    );
  }
}