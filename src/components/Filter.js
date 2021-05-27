import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className= "filter">
                <div className= "filter-result">{this.props.count}Products</div>
                <div className= "filter-sort">
                Order {""}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Lastest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className= "filter-size">
                    Size
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="62">62</option>
                        <option value="68">68</option>
                        <option value="74">74</option>
                        <option value="80">80</option>
                        <option value="86">86</option>
                        <option value="92">92</option>
                        <option value="98">98</option>
                        <option value="104">104</option>
                        <option value="110">110</option>
                    </select>
                </div>
                <div className= "filter-color">
                    Color
                    <select value={this.props.color} onChange={this.props.filteredProducts}>
                        <option value="">All</option>
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="pink">pink</option>
                        <option value="white">white</option>                      
                        <option value="yellow">yellow</option>                       
                    </select>
                </div>
            </div>
        )
    }
}
