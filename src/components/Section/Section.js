import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({tittle, children}) => {

return (
<section className={css.section}>
    <h1 className={css.tittle}>{tittle}</h1>
    {children}

</section>

)

}

Section.propTypes = {

    tittle: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired
}


export default Section;