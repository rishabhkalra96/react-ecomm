import React from 'react'
import './custom-accordion.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const getAccordionDetails = (item) => {
    if (item.type === 'normal') {
      return <AccordionDetails>
              <Typography>
                {item.text}
              </Typography>
            </AccordionDetails>
    }
    if (item.type === 'table' && item.data && typeof item.data === 'object') {
      return <AccordionDetails>
              <Typography>
                {
                  <span className="table table-container">
                    {
                      Object.keys(item.data).map((colName,i) => {
                      return <span key={i} className={`table-row name_${colName}`}>
                        <span className="table-cell table-row-column key">{item.data[colName].display_name}</span>
                        <span className="table-cell table-row-column value">{item.data[colName].value}</span>
                      </span>
                      })
                    }
                  </span>
                }
              </Typography>
            </AccordionDetails>
    }
    if (item.type === 'reviews' && item.reviews) {
      if (item.reviews && Array.isArray(item.reviews.reviews) && item.reviews.reviews.length) {
        const reviewArray = item.reviews.reviews
        const reviewTemplateArray = reviewArray.map((mainReview,i) => {
          const accordionTemplate = <AccordionDetails key={i}>
          <Typography>
          {
              <span className={`block parent review-container_${i}`}>
                <span className="block list-title">
                {mainReview.review_title ? mainReview.review_title : null}
                </span>
                <span className="block list-body">
                {mainReview.review ? mainReview.review : null}
                </span>
              </span>
          }
        </Typography>
      </AccordionDetails>
return accordionTemplate
        })
        return reviewTemplateArray;
      }
    return <p className="p-5">No {item.name} available</p>
    }
    return <p className="p-5">No {item.name} available</p>
  }


  const getAccordions = (itemsToRender, classes) => {
    if (itemsToRender && itemsToRender.length) {
      return itemsToRender.map((item,i) => <Accordion key={i} disabled={item.disabled}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel_${i}_content_${item.name}`}
              id={`panel_${i}_header_${item.name}`}
            >
              <Typography className={classes.heading}>{item.name}</Typography>
            </AccordionSummary>
            {
              getAccordionDetails(item)
            }
          </Accordion>
      )
    }
    return null
  }

export const CustomAccordion = ({items}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          {getAccordions(items, classes)}
          </div>
      );
    }