import React from 'react'

export default function Notfound() {
  return (
    <div>
        <h1>OOPS! 404</h1>
        <p>Not Found</p>
        <div>
            {<Image
            src="https://httpstatusdogs.com/img/404.jpg"
            alt="Cachorro cavando..."
            width={500}
            height={500}
            />}
        </div>
    </div>
  )
}
