import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd';
import { selectWeather } from '../action/action'
import { SELECT_WEATHER } from '../action/action'

class CityWeather extends Component {
	constructor(props) {
		super(props)
  }
  
	getWeather = () => {
		const { dispatch } = this.props
    dispatch(selectWeather('city=320100&key=ecfbe66140f8ed4cc0bcbcf92b111074'))
	}

	componentWillReceiveProps(nextProps) {
  }

	render() {
		const { weatherDetail } = this.props
		return (
			<div>
				<Button type="primary" onClick={this.getWeather}>点击获取天气</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
  const { postsByWeather } = state
	const weatherDetail = postsByWeather[SELECT_WEATHER] ? postsByWeather[SELECT_WEATHER]['items']['lives'][0] : []

  return {
    weatherDetail
  }
}

export default connect(mapStateToProps)(CityWeather);