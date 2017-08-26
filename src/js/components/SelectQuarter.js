import React from 'react'
import { observer } from 'mobx-react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

@observer
export default class SelectQuarter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' }
        ],
      value: '2'
    }
    this.onChange = this.onChange.bind(this)
  }

    static propTypes = {
        hist: React.PropTypes.any.isRequired
    }

    onChange(value) {
        this.props.hist.data.quarter = value
        this.setState({ value });
    }

    render () {
	return (
    <div>
        <h4 className="section-heading">Quarter</h4>
        <Select
            onChange={this.onChange}
            options={this.state.options}
            simpleValue
            searchable={false}
            clearable={false}
            value={this.state.value}
        />
	</div>
	);
    }
}
