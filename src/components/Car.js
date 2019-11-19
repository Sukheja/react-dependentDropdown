import React, { Component } from "react";

class CarCompany extends Component {
  state = {
    carCompany: [
      { id: 1, companyName: "Honda" },
      { id: 2, companyName: "Hyundai" },
      { id: 3, companyName: "Ford" },
      { id: 4, companyName: "Audi" }
    ],
    carModel: [
      { id: 1, companyName: "Honda", carModel: "Amaze" },
      { id: 2, companyName: "Hyundai", carModel: "Creta" },
      { id: 3, companyName: "Ford", carModel: "EcoSports" },
      { id: 4, companyName: "Audi", carModel: "R8" },
      { id: 5, companyName: "Honda", carModel: "Jazz" },
      { id: 6, companyName: "Hyundai", carModel: "Verna" },
      { id: 7, companyName: "Audi", carModel: "RS5" },
      { id: 8, companyName: "Ford", carModel: "Figo" }
    ]
  };

  handleChanges = e => {
    this.setState({ selectValue: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h6>Select your car:</h6>
        <div>
          <span className="mr-5">Car selected</span>
          <select onChange={this.handleChanges}>
            <option></option>
            {this.state.carCompany.map(company => (
              <option key={company.id}>{company.companyName}</option>
            ))}
          </select>
        </div>
        <div className="mt-2">
          <span className="mr-4">Modal selected</span>
          <select>
            <option></option>
            {this.state.carModel
              .filter(company => company.companyName === this.state.selectValue)
              .map(model => (
                <option key={model.id}>{model.carModel}</option>
              ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default CarCompany;
