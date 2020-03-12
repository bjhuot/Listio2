import App from 'next/app'
import Page from '../components/Page'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps
    if (Component.getInitialProps) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const json = await res.json()
      pageProps = json
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default MyApp

// import App from 'next/app'
// import Page from '../components/Page'

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }
//     //exposes query to user
//     pageProps.query = ctx.query
//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props

//     return (
//       <Page>
//         <Component {...pageProps} />
//       </Page>
//     )
//   }
// }

// export default MyApp
