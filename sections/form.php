<div class="form-wrapper bg-white">
  <form action="#" method="post" class="contact-form">
    <ul class="list-unstyled d-flex flex-column gap-3">
      <li><input type="text" name="name" placeholder="Name" required class="form-control" /></li>

      <li><input type="email" name="email" placeholder="Email" required class="form-control" /></li>

      <li><input type="text" name="phone" placeholder="Phone" required class="form-control" /></li>
      <li>
        <textarea name="message" rows="4" placeholder="Message" required class="form-control"></textarea>
      </li>
      <li>
        <input type="checkbox" class="form-check-input" id="checkTerms" required>
        <label class="form-check-label" for="checkTerms"> I agree to <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </label>
      </li>
      <li>
        <button type="submit" class="btn btn-bgcolor btn-bgcolor-primary border-radius-8 color-white">Send Message</button>
      </li>
    </ul>

  </form>
</div>