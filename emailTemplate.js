const emailTemplate = `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Welcome mail</title>
    <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
    <![endif]--> <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->
    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        .rollover span {
            font-size: 0;
        }

        u+.body img~div div {
            display: none;
        }

        #outlook a {
            padding: 0;
        }

        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
        }

        a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors],
        #MessageViewBody a {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (max-width:600px) {
            .es-p-default {}

            *[class="gmail-fix"] {
                display: none !important
            }

            p,
            a {
                line-height: 150% !important
            }

            h1,
            h1 a {
                line-height: 120% !important
            }

            h2,
            h2 a {
                line-height: 120% !important
            }

            h3,
            h3 a {
                line-height: 120% !important
            }

            h4,
            h4 a {
                line-height: 120% !important
            }

            h5,
            h5 a {
                line-height: 120% !important
            }

            h6,
            h6 a {
                line-height: 120% !important
            }

            .es-header-body p {}

            .es-content-body p {}

            .es-footer-body p {}

            .es-infoblock p {}

            h1 {
                font-size: 30px !important;
                text-align: center
            }

            h2 {
                font-size: 26px !important;
                text-align: center
            }

            h3 {
                font-size: 20px !important;
                text-align: center
            }

            h4 {
                font-size: 24px !important;
                text-align: left
            }

            h5 {
                font-size: 20px !important;
                text-align: left
            }

            h6 {
                font-size: 16px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
                font-size: 24px !important
            }

            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
                font-size: 20px !important
            }

            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
                font-size: 16px !important
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body a {
                font-size: 14px !important
            }

            .es-content-body p,
            .es-content-body a {
                font-size: 16px !important
            }

            .es-footer-body p,
            .es-footer-body a {
                font-size: 14px !important
            }

            .es-infoblock p,
            .es-infoblock a {
                font-size: 12px !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
                text-align: right !important
            }

            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
                text-align: justify !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
                display: inline !important
            }

            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
                line-height: 0 !important;
                font-size: 0 !important;
                display: block
            }

            .es-spacer {
                display: inline-table
            }

            a.es-button,
            button.es-button {
                font-size: 20px !important;
                padding: 10px 20px 10px 20px !important;
                line-height: 120% !important
            }

            a.es-button,
            button.es-button,
            .es-button-border {
                display: inline-block !important
            }

            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
                display: block !important
            }

            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            .es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            .h-auto {
                height: auto !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }
    </style>
</head>

<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#ffffff"></v:fill> </v:background><![endif]-->
        <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
            <tr style="border-collapse:collapse">
                <td valign="top" style="padding:0;Margin:0">
                    <table cellspacing="0" cellpadding="0" align="center" class="es-header" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" align="center" class="es-header-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><a
                                                                        href="https://shotlin.com/" target="_blank"
                                                                        class="rollover"
                                                                        style="mso-line-height-rule:exactly;text-decoration:none;color:#F6A1B4;font-size:14px"><img
                                                                            src="https://frofllu.stripocdn.email/content/guids/videoImgGuid/images/asset_42x_WXW.png"
                                                                            alt="" width="94" class="rollover-first"
                                                                            style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"
                                                                            height="94"><span
                                                                            style="font-size:0;mso-hide:all"><img
                                                                                src="https://frofllu.stripocdn.email/content/guids/9c127175-4c54-4077-abaf-60f51f9572c6/images/asset_42x.png"
                                                                                width="94" class="rollover-second"
                                                                                style="display:none;font-size:14px;border:0;outline:none;text-decoration:none;max-height:0px"
                                                                                height="94"></span> </a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" align="center" class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            bgcolor="#fcfcfc"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:3px;background-color:#fcfcfc"
                                                            role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:30px;padding-right:20px;padding-left:20px">
                                                                    <h1 class="es-m-txt-l"
                                                                        style="Margin:0;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:30px;font-style:normal;font-weight:normal;line-height:36px;color:#333333">
                                                                        Welcome!</h1>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td bgcolor="#fcfcfc" align="left"
                                                                    style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:10px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Hi ,</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Thank you for your enthusiasm about our upcoming
                                                                        website! 🌟 We’re thrilled to have you on this
                                                                        journey with us.</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <br></p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Our team is putting in the final touches to
                                                                        ensure you have an amazing online experience.
                                                                        We’re excited to announce that the launch is
                                                                        just around the corner, and we can’t wait to
                                                                        share it with you!</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <br></p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Stay tuned for a notification with a special
                                                                        link to explore the new site. Your patience and
                                                                        support mean the world to us, and we look
                                                                        forward to welcoming you to our online community
                                                                        very soon!</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <br></p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Warm regards, The Shotlin Team 🚀</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            bgcolor="#fff4f7"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fff4f7"
                                                            role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="Margin:0;padding-right:20px;padding-left:20px;padding-top:20px;padding-bottom:5px">
                                                                    <h3
                                                                        style="Margin:0;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:18px;font-style:normal;font-weight:normal;line-height:21.6px;color:#333333">
                                                                        Let's get social</h3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr style="border-collapse:collapse">
                            <td bgcolor="#666666" align="center" style="padding:0;Margin:0;background-color:#666666">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            bgcolor="#fff4f7"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fff4f7;border-radius:3px"
                                                            role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td bgcolor="#fff4f7" align="center"
                                                                    style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:5px;padding-top:5px;font-size:0">
                                                                    <table width="100%" height="100%" cellspacing="0"
                                                                        cellpadding="0" border="0" role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td
                                                                                style="padding:0;Margin:0;border-bottom:1px solid #fff4f7;background:#00000000 none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:25px;font-size:0">
                                                                    <table cellspacing="0" cellpadding="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <img title="Facebook"
                                                                                    src="https://frofllu.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                                                    alt="Fb" width="32"
                                                                                    style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"
                                                                                    height="32"></td>
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <img title="Х"
                                                                                    src="https://frofllu.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png"
                                                                                    alt="Х" width="32"
                                                                                    style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"
                                                                                    height="32"></td>
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <img title="Instagram"
                                                                                    src="https://frofllu.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                                                    alt="Inst" width="32"
                                                                                    style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"
                                                                                    height="32"></td>
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://viewstripo.email/"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;color:#F6A1B4;font-size:14px"><img
                                                                                        title="Youtube"
                                                                                        src="https://frofllu.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                                                        alt="Yt" width="32" height="32"
                                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td bgcolor="#666666" align="center" style="padding:0;Margin:0;background-color:#666666">
                                <table cellspacing="0" cellpadding="0" bgcolor="#666666" align="center"
                                    class="es-footer-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#666666;width:600px"
                                    role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:20px;padding-bottom:20px">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#FFFFFF;font-size:14px">
                                                                        <br></p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td esdev-links-color="#999999" align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;letter-spacing:0;color:#ffffff;font-size:14px">
                                                                        BANIPUR, PALPARA, Habra,North 24 Parganas
                                                                        Pin-743233 WB, INDIA</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
                                            <table width="100%" cellpadding="0" cellspacing="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse;  ">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0"><img
                                                                        src="https://frofllu.stripocdn.email/content/guids/CABINET_320b1a9560ad029d0d7cb82941969a22e084ba6f601bc0839af40d733815326a/images/asset_32x.png"
                                                                        alt="" width="75" height="90"
                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none; margin-bottom: 20px;">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
`;


module.exports = emailTemplate;