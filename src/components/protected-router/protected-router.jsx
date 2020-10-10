import React, { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../providers/auth-provider'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const Auth = useContext(AuthContext)
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(Auth.isLoggedIn)
    }, [Auth.isLoggedIn])

    return <Route
        {...rest}
        render={props =>
            showComponent ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
        }
    />
    };

