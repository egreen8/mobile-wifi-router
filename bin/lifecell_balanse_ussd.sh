#! /bin/bash
mmcli -m 0 --3gpp-ussd-status
echo $?
mmcli -m 0 --3gpp-ussd-cancel
mmcli -m 0 --3gpp-ussd-initiate='*121#'
