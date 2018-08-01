import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import cardFooterStyle from "./cardFooterStyle.jsx";

function CardFooter({
    ...props
}) {
    const {
        classes,
        className,
        children,
        plain,
        profile,
        stats,
        chart,
        ...rest
    } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}

CardFooter.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    stats: PropTypes.bool,
    chart: PropTypes.bool
};

export default withStyles(cardFooterStyle)(CardFooter);
