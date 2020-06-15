### Overview
This is attempt to build a simple mobile-wifi router, based on Orange Pi Zero (256M) which runs on
Armbian 20.02.1 Buster. Repo mostly contains the configuration and some other files.

### Installing core, step_by_step
* install **hostapd** and **isc-dhcp-server**
* intstall **iptables-persistent**
* setup hostapd and dhcp-server with config files
* update INTERFACES="wlan0" on /etc/default/isc-dhcp-server see **is-dhcp-server** file
* setup wlan0 for static IP , /etc/network/interfaces, see **interfaces** file.
* move out **wlan0** from Managed connections of NetworkManager , see **NetworkManager.conf** 
* after reboot the device should be able successfully run in WIFI AP mode
* enable forwarding of traffic **net.ipv4.ip_forward=1** at /etc/sysctl.conf
* apply rules for NAT, see **iptables.rules** file
* check rules --> **sudo iptables -t nat -S;** **sudo iptables -S**
* make this rules happen on reboot: **sudo sh -s "iptables-save" > /etc/iptables/rules.v4** 

### Establishing ppp connection
The folder **ppp** contais all required files for pppd service to rise up **ppp0** connection.I would say 
it works far o less. But at some point i realised that ModemManager in conjunction with NetworkManager is all what 
I need. These nice apps cover a lot of cases which i would need to solve by my own. So i decided to stop there 
and just use them for my needs. Some tips here:
* copy policy file **modem-manager-gui.pkla** to /var/lib/polkit-1/localauthority/10-vendor.d/ to be able 
managing modemmanager daemon with **mmcli** application
* **man mmcli** of course :)
