import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { breakpoints } from 'ui/breakpoints'
import { green } from 'logger'

class PictureElement extends React.Component { // make pure?
  componentDidMount() {
    // c.f. https://github.com/scottjehl/picturefill/pull/556
    let picturefill
    try {
        picturefill = require('picturefill')
    } catch (x) {
        return
    }

    if (picturefill) {
        picturefill() // browser
    }
    // else node
}

  render() {
    const {
      classes,
      className: classNameProp,
      images
    } = this.props
    // console.log(breakpoints)
    green('images', images)
    const clsNames = ([
      classes.fluid,
      classNameProp
    ])
    return (
      <div id='PictureElement-wrapper' className={classes.wrapper}>
        <picture>
          {/* xs */}
          <source srcSet={images.xs} media={`(max-width: ${breakpoints.sm - 1}px)`} />
          {/* sm */}
          <source srcSet={images.sm} media={`(max-width: ${breakpoints.md - 1}px)`} />
          {/* md */}
          <source srcSet={images.md} media={`(max-width: ${breakpoints.lg - 1}px)`} />
          {/* lg */}
          <source srcSet={images.lg} media={`(max-width: ${breakpoints.xl - 1}px)`} />
          {/* xl */}
          <source srcSet={images.xl} media={`(min-width: ${breakpoints.xl - 1}px)`} />
          <img srcSet={images.md} className={classes.fluid} alt='MDN' />
        </picture>
      </div>
    )
  }

}

const styles = theme => ({
  wrapper: {
    // width: '100%',
    // height: '100%',
    // width: 300,
    backgroundColor: 'orange',
  },
  fluid: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    // height: '100%',

  },
})

export default injectSheet(styles)(PictureElement)