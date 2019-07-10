import React, { Component, Fragment } from 'react';

class App extends Component {

  render() {

    const arr = [
      {
        Name: 'Hamza',
        Age: '32',
        Cars: [
          {
            Name: 'Mercedes'
          },
          {
            Name: 'Audi'
          },
          {
            Name: 'Lamborgini'
          }
        ]
      },
      {
        Name: 'Shabi',
        Age: '50',
        Cars: [
          {
            Name: 'Mercedes'
          },
          {
            Name: 'Audi'
          },
          {
            Name: 'Lamborgini'
          },
          {
            Name: 'Porcshe',
          }
        ]
      }
    ]

    return (
      <Fragment>
        {arr.map((value, index) => {
          return (
            <Fragment key={index}>
              <ul>
                <li>{value.Name} is {value.Age} years old</li>
                {value.Cars.map((value2, index2) => {
                  return (
                    <Fragment key={index2}>
                      <ul >
                        <li>{value.Name} owns {value2.Name}</li>
                      </ul>
                    </Fragment>
                  )
                })}
              </ul>
            </Fragment>

          )
        })}
      </Fragment>
    );
  }
}

export default App;
