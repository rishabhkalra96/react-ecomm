import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// to handle material ui domnode errors
const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


  const getAccordions = (itemsToRender, classes) => {
    if (itemsToRender && itemsToRender.length) {
      return itemsToRender.map((item,i) => {
        return <Accordion disabled={item.disabled}>
            <AccordionSummary
            ref={ref}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel_${i}_content`}
              id={`panel_${i}_header`}
            >
              <Typography className={classes.heading}>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
      })
    }
    return null
  }

export const CustomAccordion = ({items}) => {
    const classes = useStyles();

    return (
        <div ref={ref} className={classes.root}>
          {getAccordions(items, classes)}
          </div>
      );
    }