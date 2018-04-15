import React from 'react'
import * as Form from '../Form'
import { storiesOf } from '@storybook/react';
import Card from '../Card'
import C3Chart from 'react-c3js';

import 'c3/c3.css';


const blue = "#467fcf";
const green = "#5eba00"; 
const orange = "#fd9644";
const red = "#cd201f"; 
const yellow = "#f1c40f";
const teal = "#2bcbba"; 
const purple = "#a55eea";
const pink = "#f66d9b";

storiesOf('Chart', module).add('Employment Growth', () => 
  <Card>
    <Card.Header>
      <Card.Title>Employment Growth</Card.Title>
    </Card.Header>
    <Card.Body>
      <C3Chart 
        data={{
          columns: [
            ['data1', 2, 8, 6, 7, 14, 11],
            ['data2', 5, 15, 11, 15, 21, 25],
            ['data3', 17, 18, 21, 20, 30, 29]
          ],
          type: 'line',
          colors: {
            'data1': orange,
            'data2': blue,
            'data3': green
          },
          names: {
            'data1': 'Development',
            'data2': 'Marketing',
            'data3': 'Sales'
          }
        }} 
        axix={{
          x: {
            type: 'category',
            categories: ['2013', '2014', '2015', '2016', '2017', '2018']
          },
        }}
        legend={{
          show: false,
        }}
        padding={{
          bottom: 0,
          top: 0
        }}
      />
    </Card.Body>
  </Card>
).add('Monthly Average Temperature', () => 
<Card>
  <Card.Header>
    <Card.Title>Monthly Average Temperature</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          ['data2', 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        ],
        labels: true,
        type: 'line', 
        colors: {
          'data1': blue,
          'data2': green
        },
        names: {
          'data1': 'Tokyo',
          'data2': 'London'
        }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Area Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Area Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
      ],
      type: 'area',
      colors: {
        'data1': blue,
        'data2': pink
      },
      names: {
          // name of each serie
        'data1': 'Maximum',
        'data2': 'Minimum'
      }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Area Spline Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Area Spline Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
      ],
      type: 'area-spline',
      colors: {
        'data1': blue,
        'data2': pink
      },
      names: {
          // name of each serie
        'data1': 'Maximum',
        'data2': 'Minimum'
      }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Area Spline Sracked Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Area Spline Sracked Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
      ],
      type: 'area-spline',
      groups: [
        [ 'data1', 'data2']
      ],
      colors: {
        'data1': blue,
        'data2': pink
      },
      names: {
          // name of each serie
        'data1': 'Maximum',
        'data2': 'Minimum'
      }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Spline Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Wind speed during two days</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6],
          ['data2', 0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
      ],
      type: 'spline',
      colors: {
        'data1': blue,
        'data2': pink
      },
      names: {
          // name of each serie
        'data1': 'Maximum',
        'data2': 'Minimum'
      }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Step Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Step Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'step',
        colors: {
          'data1': blue,
          'data2': pink
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          
        }
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Area Step Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Area Step Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-step',
        colors: {
          'data1': blue,
          'data2': pink
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      }} 
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          
        }
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Bar Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Bar Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar',
        colors: {
          'data1': blue,
          'data2': pink
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      }} 
      bar={{ width: 16 }}
      axix={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          
        }
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Pie Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Pie Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 63],
          ['data2', 44],
          ['data3', 12],
          ['data4', 14]
        ],
        type: 'pie',
        colors: {
          'data1': blue,
          'data2': green,
          'data3': orange,
          'data4': teal
        },
        names: {
          'data1': 'A',
          'data2': 'B',
          'data3': 'C',
          'data4': 'D'
        }
      }} 
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Donut Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Donut Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 63],
          ['data2', 37]
        ],
        type: 'donut', 
        colors: {
          'data1': green,
          'data2': pink
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      }} 
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Scatter Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Scatter Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'scatter', 
        colors: {
          'data1': blue,
          'data2': pink
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      }} 
      axis={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
).add('Combination Chart', () => 
<Card>
  <Card.Header>
    <Card.Title>Combination Chart</Card.Title>
  </Card.Header>
  <Card.Body>
    <C3Chart 
      data={{
        columns: [
            // each columns data
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
          'data2': "line",
          'data3': "spline",
        },
        groups: [
          [ 'data1', 'data4']
        ],
        colors: {
          'data1': green,
          'data2': pink,
          'data3': green,
          'data4': blue
        },
        names: {
            // name of each serie
          'data1': 'Development',
          'data2': 'Marketing',
          'data3': 'Sales',
          'data4': 'Sales'
        }
      }} 
      bar={{ width: 16 }}
      axis={{
        x: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      }}
      legend={{ show: false }}
      padding={{
        bottom: 0,
        top: 0
      }}
    />
  </Card.Body>
</Card>
)