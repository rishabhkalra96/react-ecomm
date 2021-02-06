import './add-product.scss';
import React , { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UploadBtn } from './../shared/upload-btn/upload-btn'
import Checkbox from '@material-ui/core/Checkbox';
import {SpecificationList} from './specification-list/specification-list';
import * as uniqueID from 'uniqid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {AuthContext, getbasicUserObject} from './../../providers/auth-provider'
import {storageRef} from './../../config/firebase';
import { coreDBService } from './../../services/core-db-service'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import firebase from 'firebase/app';
import CONSTANTS from '../../config/constants';
const fullFilled_list = CONSTANTS.PRODUCT.DEFAULT_LOGISCTICS
const initialConfig = {
    id: uniqueID(),
    name: '',
    short_description: '',
    long_description: '',
    has_specifications: false,
    has_reviews: true,
    fullfilled_by: fullFilled_list[0],
    image_url: '',
    image_raw_path: '',
    item_sample_images: [],
    owner_details: {
        name: '',
        email: '',
        id: '',
        isVerified: false,
    },
    pricing_details: {
        original_price: '0',
        max_discount: '0',
        multi_currency: false,
        origin_currency: 'in',
    }
}

const validationConst = {
    name: {
        error: false,
        message: '',
    },
    short_description: {
        error: false,
        message: '',
    },
    long_description: {
        error: false,
        message: '',
    },
    has_specifications: {
        error: false,
        message: '',
    },
    fullfilled_by: {
        error: false,
        message: '',
    },
    pricing_details: {
        original_price: {
            error: false,
            message: ''
        },
        max_discount: {
            error: false,
            message: ''
        },
        multi_currency: {
            error: false,
            message: ''
        }

    }
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export const AddProduct = () => {
    const Auth = useContext(AuthContext)
    const [newFile, setNewFile] = useState(null);
    const [formData, setFormData] = useState(initialConfig);
    const [validationErrors, setValidationErrors] = useState(validationConst);
    const [specifications, setSpecifications] = useState([
        {display_name: 'Product Name', id: uniqueID(), value: ''}
    ]);
    const [snack, setSnack] = useState({
        severity: 'success',
        duration: '6000',
        message: 'Default Message',
        open: false,
    })
    const [submit, setSubmit] = useState(null);

    const resetForm = () => {
        initialConfig.id = uniqueID();
        setFormData(initialConfig);
        setNewFile(null);
        resetError('all');
    }

    function updateForm(e) {
        let fieldName = '';
        let value = ''
        if (!e.target.hasOwnProperty('id') && e.target.value) {
            // this is for select scenarios
            value = e.target.value
            fieldName = 'fullfilled_by'
        }
        if (e.target.id === 'product-name') {
            fieldName = 'name'
            value = e.target.value
        }
        if (e.target.id === 'product-short-description') {
            fieldName = 'short_description'
            value = e.target.value
        }
        if (e.target.id === 'product-long-description') {
            fieldName = 'long_description'
            value = e.target.value
        }
        if (e.target.id === 'has_specs') {
            fieldName = 'has_specifications'
            value = e.target.checked
            if (!value) {
                setSpecifications([{display_name: 'Product Name', id: uniqueID(), value: formData.name}])
            } else if (specifications.length === 1) {
                // add the product name in the specifications list for first entry
                const prevSpec = specifications[0]
                setSpecifications([{...prevSpec, value: formData.name}])
            }
        }
        if (e.target.id === 'fullfilled') {
            fieldName = 'fullfilled_by'
            value = e.target.value
        }
        if (e.target.id === 'product-original-price') {
            fieldName = 'pricing_details'
            value = {
                ...formData.pricing_details,
                original_price: e.target.value,
            }
        }
        if (e.target.id === 'product-max-discount') {
            fieldName = 'pricing_details'
            value = {
                ...formData.pricing_details,
                max_discount: e.target.value,
            }
        }
        setFormData({
            ...formData,
            [fieldName]: value
        })
    }

    const handleUpload = (e) => {
        setNewFile(e[0])
    }

    function getFormattedSpecifications() {
        if (!formData.has_specifications) {
            return {}
        }
        const newSpecObj = {};
        specifications.forEach(specObj => {
            newSpecObj[specObj.id] = {};
            const objectKeys = Object.keys(specObj);
            objectKeys.forEach(key => {
                if (key !== 'id') {
                    newSpecObj[specObj.id][key] = specObj[key];
                }
            })
        })
        return newSpecObj;
    }

    function resetError(key) {
        if (key === 'all') {
            setValidationErrors(validationConst)
        } else {
            setValidationErrors({
                ...validationErrors, [key]: {error: false, message: ''}
            })
        }
    }

    function validateForm(dataToValidate) {
        const errorObj = {}
        if (!dataToValidate.name) {
            errorObj['name'] = {error: true, message: 'Name is mandatory'}
        }
        if (!dataToValidate.short_description) {
            errorObj['short_description'] = {error: true, message: 'Short Description is mandatory'}
        }
        if (!dataToValidate.long_description) {
            errorObj['long_description'] = {error: true, message: 'Long Description is mandatory'}
        }
        if (dataToValidate.has_specifications && !Object.keys(dataToValidate.specifications).length) {
            errorObj['specifications'] = {error: true, message: 'At least one specification is mandatory if the checkbox is marked'}
        }
        if (!dataToValidate.pricing_details.original_price) {
            errorObj['pricing_details'] = errorObj['pricing_details'] ? {...errorObj['pricing_details']} : {}
            errorObj['pricing_details']['original_price'] = {error: true, message: 'Original Price is mandatory'}
        }
        if (!dataToValidate.pricing_details.max_discount) {
            errorObj['pricing_details'] = errorObj['pricing_details'] ? {...errorObj['pricing_details']} : {}
            errorObj['pricing_details']['max_discount'] = {error: true, message: 'Max Discount cannot be empty, you can put 0 also'}
        } else if (dataToValidate.pricing_details.max_discount && isNaN(dataToValidate.pricing_details.max_discount)) {
            errorObj['pricing_details'] = errorObj['pricing_details'] ? {...errorObj['pricing_details']} : {}
            errorObj['pricing_details']['max_discount'] = {error: true, message: 'Max Discount has to be an integer like 10 and not 10%'}
        }
        setValidationErrors({
            ...validationConst, ...errorObj
        })
        return !Object.keys(errorObj).length
    }

    const submitProduct = async (e) => {
        e.preventDefault()
        const formattedSpecifications = getFormattedSpecifications();
        const currentUserObj = getbasicUserObject(Auth.currentUser)
        const finalData = formData;
        finalData['owner_details'] = currentUserObj
        finalData['specifications'] = formattedSpecifications;
        finalData['created_on'] = firebase.firestore.FieldValue.serverTimestamp();
        console.log(finalData);
        if(validateForm(finalData)) {
            console.log('form is valid')
            // upload the product image and save in server
            finalData['image_raw_path'] = `inventory/${finalData.owner_details.id}/${finalData.id}/${newFile.name}`
            const cloudStorage = storageRef.child(finalData.image_raw_path)
            try {
                const uploadedFile = await cloudStorage.put(newFile)
                console.log(uploadedFile)
                if (uploadedFile.state === 'success') {
                    // use the uploaded url to database
                    const url = await uploadedFile.ref.getDownloadURL();
                    finalData.image_url = url
                    // trigger database update query
                    await coreDBService.addNewProductToInventory(finalData)
                    openSnack(CONSTANTS.PRODUCT.DEFAULT_SUCCESS_MESSAGE)
                    // reset the form for new entry
                    resetForm();
                    setSubmit(null)
                } else {
                    throw new Error('Error while uploading image to cloud servers');
                }
            } catch (e) {
                console.log('Error occured while uploading data', e.toString())
                setSubmit(null)
            }

        } else {
            console.log('form is invalid')
            console.log(validationErrors)
        }
    }

    const handleAddSpecification = () => {
        const oldSpecifications = [...specifications];
        oldSpecifications.push({display_name: '', id: uniqueID(), value: ''});
        setSpecifications(oldSpecifications)
    }

    const handleDeleteSpecification = (id) => {
        const newSpecifications = [...specifications].filter((_, idx) => id !== idx);
        setSpecifications(newSpecifications);

    }

    function updateSpecFields(e) {
        const references = e.target.id.split('-');
        const id = parseInt(references[1]);
        const key = references[0];
        const value = e.target.value;
        const newSpecifications = specifications.map((val,i) => {
            if (i === id){ 
                const newObj = {...val};
                newObj[key] = value;
                return newObj;
            }
            return val;
    })
    setSpecifications(newSpecifications)
}

const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack({
        ...snack, open: false,
    });
  };

  const openSnack = ({message, duration, severity}) => {
      setSnack({
          message,
          duration,
          severity,
          open: true,
      })
  }

    return <React.Fragment>
        <Snackbar open={snack?.open}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} 
        autoHideDuration={snack.duration ? parseInt(snack.duration) : 0} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity={snack?.severity}>
          {snack?.message}
        </Alert>
      </Snackbar>
        <div className="flex justify-center mt-4 details-container">
        <form type="submit" className="form-container">
            <div className="basic-details pt-12">
                <p className=" m-0 title font-size-2">Basic Details <span className="small-text">( product-id: {formData.id} )</span></p>
                <div className="w-full-width my-5 field-wrapper">
                <TextField className="w-full-width" 
                id="product-name" 
                error={validationErrors.name.error}
                helperText={validationErrors.name.message}
                value={formData.name} label="Product Name" variant="outlined" onChange={updateForm}/>
                </div>
                <div className="w-full-width my-5 field-wrapper">
                <TextField 
                error={validationErrors.short_description.error}
                helperText={validationErrors.short_description.message}
                className="w-full-width" 
                multiline value={formData.short_description} id="product-short-description" label="Product Description (short)" variant="outlined" onChange={updateForm}/>
                </div>
                <div className="w-full-width my-5 field-wrapper">
                <TextField className="w-full-width" 
                error={validationErrors.long_description.error}
                helperText={validationErrors.long_description.message}
                multiline value={formData.long_description} id="product-long-description" label="Product Description (long)" variant="outlined" onChange={updateForm}/>
                </div>
                {
                    newFile ?
                    <div className="flex my-5 field-wrapper">
                <div className="image-preview-wrapper">
                        <img src={URL.createObjectURL(newFile)} alt=""/>
                    </div>
                </div>  : null
                }
                <div className="flex my-5 field-wrapper">
                    {
                        newFile ? <Button variant="contained" color="secondary" onClick={() => setNewFile(null)}>Remove Image</Button> :
                        <UploadBtn format="image/*" allowMultiple={false} 
                        materialColor="primary" label={'Upload Product Image'} 
                        customClass={'min-btn-width'} handleUpload={handleUpload}/>
                    }
                </div>
                <div className="w-full-width my-5 field-wrapper">
                <Checkbox id="has_specs" color="primary" checked={formData.has_specifications} 
                onChange={updateForm} inputProps={{ 'aria-label': 'Does this product contains specificatons ?' }}/>
                <span className="ml-3">Does this product have specificatons ?</span>
                </div>
            </div>
                {formData.has_specifications ?
                    <div className="specification-details">
                        <p className=" m-0 title font-size-2">Specification Details</p>
                        <div className="w-full-width my-5 field-wrapper">
                            {
                                specifications.length ? specifications.map((spec, id) => {
                                    const uniqueIDForSpec = `${id}-specification`
                                    return <SpecificationList
                                        key={uniqueIDForSpec}
                                        addList={handleAddSpecification}
                                        deleteList={handleDeleteSpecification.bind(this, id)}
                                        spec={spec}
                                        onUpdate={updateSpecFields}
                                        uniqueID={uniqueIDForSpec}
                                        addBtn={id === 0}
                                    />
                                }) : null
                            }
                        </div>
                    </div> : null
                }
                <div className="pricing-details pt-12">
                    <p className=" m-0 title font-size-2">Pricing Details</p>
                    <div className="w-full-width my-5 field-wrapper">
                <TextField 
                error={(validationErrors.pricing_details && validationErrors.pricing_details.original_price) ? validationErrors.pricing_details.original_price.error : false}
                helperText={(validationErrors.pricing_details && validationErrors.pricing_details.original_price) ? validationErrors.pricing_details.original_price.message : ''}
                className="w-full-width" 
                multiline value={formData.pricing_details.original_price} id="product-original-price" label="Product Original Price" variant="outlined" onChange={updateForm}/>
                </div>
                <div className="w-full-width my-5 field-wrapper">
                <TextField 
                error={(validationErrors.pricing_details && validationErrors.pricing_details.max_discount) ? validationErrors.pricing_details.max_discount.error : false}
                helperText={(validationErrors.pricing_details && validationErrors.pricing_details.max_discount) ? validationErrors.pricing_details.max_discount.message : ''}
                className="w-full-width" 
                multiline value={formData.pricing_details.max_discount} id="product-max-discount" label="Max Discount supported" variant="outlined" onChange={updateForm}/>
                </div>
                </div>
                <div className="logistics-details pt-12">
                    <p className=" m-0 title font-size-2">Logistics Details</p>
                    <div className="w-full-width my-5 field-wrapper flex justify-between items-center">
                        <p className="inline">
                            Select the company which would handle logistics for you :
                        </p>
                        <div className="select-wrapper inline">
                            <FormControl variant="outlined" className="min-control-width">
                        <Select
                        className="w-full"
                            labelId="simple-select-filled-label"
                            id="simple-select-filled"
                            value={formData.fullfilled_by}
                            onChange={updateForm}
                            >
                            {
                                fullFilled_list.map((company, id) => <MenuItem key={id} value={company}>
                                    {id === 0 ? <em>{company.name}</em> : <React.Fragment>{company.name}</React.Fragment>}
                                </MenuItem>)
                            }
                        </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            <div className="flex justify-center my-5 button-container">
            <Button className="mr-4" variant="contained" disabled={submit === 'submitting'} onClick={resetForm} color="secondary">Reset</Button>
            <Button variant="contained" color="primary" disabled={submit === 'submitting'} onClick={submitProduct}>Submit</Button>
            </div>
        </form>
        </div>
    </React.Fragment>
}