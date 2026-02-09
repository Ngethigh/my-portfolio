<?php
echo "Current User: " . get_current_user() . "\n";
echo "PHP User: " . exec('whoami') . "\n";
echo "Directory Writeable: " . (is_writable('.') ? 'Yes' : 'No') . "\n";
?>
