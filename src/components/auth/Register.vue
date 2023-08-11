<template>
    <form>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>
  
  
<script>
export default {
    name: "RegisterVue"
}
</script>
  
<style></style>
  