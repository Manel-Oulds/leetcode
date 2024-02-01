import os
import platform
import subprocess

def get_ram():
    # Get RAM size in GB
    mem_info = os.popen('free -g').read()
    ram_size = int(mem_info.split()[7])
    return ram_size

def get_cpu_cores():
    # Get the number of CPU cores
    cpu_info = os.popen('nproc --all').read()
    cpu_cores = int(cpu_info)
    return cpu_cores

def get_disk_size():
    # Get Disk size in GB
    disk_info = os.popen('df -h /').read()
    disk_size = int(disk_info.split('\n')[1].split()[1][:-1])
    return disk_size

def get_redhat_release():
    # Get Red Hat release version
    redhat_release = os.popen('cat /etc/redhat-release').read().strip()
    return redhat_release

def main():
    # Get system information
    ram_size = get_ram()
    cpu_cores = get_cpu_cores()
    disk_size = get_disk_size()
    redhat_release = get_redhat_release()

    # Define the expected values
    expected_ram = 4  # Adjust as needed
    expected_cpu_cores = 2  # Adjust as needed
    expected_disk_size = 50  # Adjust as needed
    expected_redhat_release = "Red Hat"  # Adjust as needed

    # Check if the system meets the criteria
    if ram_size >= expected_ram and cpu_cores >= expected_cpu_cores and disk_size >= expected_disk_size and expected_redhat_release in redhat_release:
        print("System meets the requirements.")
    else:
        print("System does not meet the requirements.")

if __name__ == "__main__":
    main()
