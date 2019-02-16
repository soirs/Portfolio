import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const ContentPage = ({ children, className, ...props }) => (
  <section {...props} className={classNames(styles.contentPage, className)}>
    {children}
  </section>
)

export default ContentPage
