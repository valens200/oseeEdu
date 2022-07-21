import React from 'react'
import javaL from '../assets/images/javaL.jpg'
import Reactt from '../assets/images/ReactT.png'
import js from '../assets/images/js.png'
import SQL from '../assets/images/SQL.webp'
import first from '../assets/images/first.jpg'
import first1 from '../assets/images/first1.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.jpg'
function Data() {
    const cardsInfo = [
        { 
            image:first1,
            cost:'$' + 14.00,
            course:'Biology',
            number:12
        },
        { 
            image:first,
            cost:'$' + 22.00,
            course:'Chemistry',
            number:14
        },
        { 
            image:second,
            cost:'$' + 24.00,
            course:'Pysics',
            number:16
        },
        { 
            image:third,
            cost:'$' + 32.00,
            course:'Geography',
            number:18
        },
        { 
            image:javaL,
            cost:'$' + 32.00,
            course:'Java',
            number:22
        },
        { 
            image:SQL,
            cost:'$' + 32.00,
            course:'SQL',
            number:30
        },
        { 
            image:SQL,
            cost:'$' + 32.00,
            course:'Geography',
            number:30
        },
        { 
            image:Reactt,
            cost:'$' + 32.00,
            course:'React',
            number:32
        },
        { 
            image:Reactt,
            cost:'$' + 32.00,
            course:'React',
            number:32
        }
    ]
  return cardsInfo;
}

export default Data