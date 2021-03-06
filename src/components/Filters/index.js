import React from 'react'
import DateFilter from '../DateFilter'
import OptionsFilter from '../OptionsFilter'

class Filters extends React.Component {
    constructor(props){
      super(props)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleDateChange(event) {
      let filters = this.props.filters
      filters[event.target.name] = event.target.value
      this.props.onFilterChange(filters)
    }

    handleOptionChange(event) {
      let filters = this.props.filters
      filters[event.target.name] = event.target.value
      this.props.onFilterChange(filters)
    }

    render(){
      const { filters } = this.props
      return(
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
        <div className="navbar-item">
          <DateFilter
            date={ filters.dateFrom }
            icon="sign-in-alt"
            name="dateFrom"
            onDateChange={this.handleDateChange}
            />
        </div>
        <div className="navbar-item">
          <DateFilter
            date={ filters.dateTo }
            icon="sign-out-alt"
            name="dateTo"
            onDateChange={this.handleDateChange}
            />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={ [ {value: 'select', name: 'Todas las opciones'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
            selected={ filters.country }
            icon="globe"
            name="country"
            onOptionChange={this.handleOptionChange}
            />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={ [ {value: 'select', name: 'Cualquier precio'}, {value: 1, name: '$500.000'}, {value: 2, name: '$1.000.000'}, {value: 3, name: '$2.200.000'}, {value: 4, name: '$3.500.000'} ] }
            selected={ filters.price }
            icon="dollar-sign"
            name="price"
            onOptionChange={this.handleOptionChange}
             />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={ [ {value: 'select', name: 'Cualquier tama??o'}, {value: 10, name: 'Hotel peque??o'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
            selected={ filters.rooms }
            icon="bed"
            name="rooms"
            onOptionChange={this.handleOptionChange}
            />
        </div>
      </nav>
      )
    }
}

export default Filters;
