<script>
  import AuthNavbar from '@/components/Navbars/AuthNavbar.svelte';
  import Footer from '@/components/Footers/Footer.svelte';

  const team2 = '/assets/img/team-2-800x800.jpg';
  const profile_bg = '/assets/img/profile-bg.jfif';
</script>

<div class="scrollbar">
  <AuthNavbar />
  <main class="profile-page">
    <section class="relative block h-500-px">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="
              background-image: url({profile_bg});
            "
      >
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black" />
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0);">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-slate-200 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-slate-200">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6 prose prose-base dark:prose-invert prose-a:text-blue-500">
            <h1>Chính sách về quyền riêng tư</h1>
            <p><br /></p>
            <h2>Giới thiệu</h2>
            <p>
              Chúng tôi tại Báo Bình Phước (sau đây gọi là công ty chúng tôi) đã luôn nỗ lực bảo vệ thông tin cá nhân của khách hàng. Với việc thu thập ngày càng nhiều thông tin cá nhân từ khách hàng qua Internet thông qua đăng ký người dùng, các chương trình trao thưởng, khảo sát người dùng, v.v., việc quản lý và bảo vệ hợp lý thông tin cá nhân của khách hàng ngày càng trở nên quan trọng hơn
              trong những năm gần đây.
            </p>
            <p>Công ty chúng tôi đã thiết lập "Chính sách về quyền riêng tư" như trình bày dưới đây và chúng tôi cam kết sẽ quản lý các Trang web của chúng tôi nhằm đảm bảo khách hàng của chúng tôi được an toàn và hài lòng bằng việc chuyên tâm theo đuổi biện pháp phòng tránh hành vi sử dụng, tiết lộ, sửa đổi trái phép, v.v. thông tin cá nhân do khách hàng của chúng tôi cung cấp.</p>
            <h2>Định nghĩa thông tin cá nhân</h2>
            <p>Thông tin cá nhân là bất kỳ thông tin nào được cung cấp cho công ty chúng tôi, có thể được sử dụng để nhận dạng một cá nhân chẳng hạn như tên và họ, địa chỉ nhà riêng hoặc địa chỉ thực tế khác, số điện thoại hoặc địa chỉ email hay bất kỳ thông tin nào nhận dạng duy nhất cá nhân đó.</p>
            <h2>Thu thập thông tin cá nhân</h2>
            <p>
              Khi chúng tôi thu thập thông tin cá nhân qua Internet, chúng tôi tuân theo quy tắc cơ bản là thông tin đó được cung cấp (đăng ký) một cách tự nguyện. Chúng tôi sẽ chỉ thu thập thông tin cá nhân trong giới hạn cần thiết để hoàn thành mục đích thu thập thông tin của mình, mục đích đó sẽ được công bố rõ ràng. Nếu bạn không muốn cung cấp (đăng ký) thông tin cá nhân mà chúng tôi tìm kiếm,
              bạn có thể từ chối làm như vậy theo toàn quyền quyết định của bạn. Trong những trường hợp đó, bạn không thể truy cập một số dịch vụ mà chúng tôi cung cấp thông qua các Trang web của công ty chúng tôi.
            </p>
            <h2>Mục đích và giới hạn sử dụng thông tin cá nhân</h2>
            <p>
              Khi chúng tôi đề nghị cung cấp thông tin cá nhân (đăng ký), chúng tôi sẽ công bố trước mục đích của việc thu thập và phương pháp sử dụng thông tin, sau đó thu thập thông tin trong giới hạn thích hợp. Một quy tắc chung giới hạn việc sử dụng thông tin cá nhân ở những mục đích sau. Đồng thời cũng có khả năng sử dụng thông tin cá nhân cho những mục đích khác, như dữ liệu thống kê ở các
              biểu mẫu trong đó dữ liệu không được phân biệt theo từng cá nhân.
            </p>
            <ul>
              <li>Để cung cấp hàng hóa hoặc dịch vụ mà bạn mong muốn.</li>
              <li>Để cải tiến dịch vụ cho bạn.</li>
              <li>Để cung cấp thông tin về hàng hóa hoặc dịch vụ cho bạn.</li>
            </ul>
            <h2>Quy tắc không tiết lộ thông tin cá nhân cho bên thứ ba</h2>
            <p>Công ty chúng tôi sẽ không tiết lộ cho các bên thứ ba bất kỳ thông tin cá nhân nào được cung cấp (đăng ký) cho chúng tôi, trừ những trường hợp sau:</p>
            <ol>
              <li>Bạn đã đồng ý tiết lộ thông tin cá nhân của mình cho bên thứ ba.</li>
              <li>Thông tin cá nhân của bạn phải được tiết lộ cho công ty liên kết, chi nhánh công ty hoặc nhà thầu phụ của chúng tôi, là những bên mà chúng tôi có thỏa thuận về tính bí mật nhằm thực hiện mục đích thu thập thông tin cá nhân, như chúng tôi đã tiết lộ trước đây. (Ví dụ: Chỉ dẫn một nhà cung cấp dịch vụ giao hàng để giao giải thưởng của bạn.)</li>
              <li>Thông tin cá nhân của bạn đã được xử lý vào dữ liệu thống kê sẽ không tiết lộ danh tính của bạn.</li>
              <li>Luật yêu cầu tiết lộ.</li>
            </ol>
            <h2>Sử dụng thư trực tiếp</h2>
            <p>Chúng tôi sẽ không sử dụng tên, địa chỉ email, địa chỉ thực tế, v.v. được cung cấp cho chúng tôi trừ những trường hợp nêu trên cho bất kỳ hoạt động gửi thư trực tiếp nào mà không có sự đồng ý của bạn. Tuy nhiên, nếu bạn đã đồng ý cụ thể tại thời điểm đăng ký, chúng tôi có thể sử dụng địa chỉ email của bạn để gửi cho bạn những thông tin như thông báo về việc bạn đạt giải.</p>
            <h2>Tham khảo, chỉnh sửa hoặc xóa thông tin cá nhân</h2>
            <p>Khi bạn muốn đề cập tới thông tin cá nhân mà chúng tôi sở hữu hoặc muốn chỉnh sửa hay xóa thông tin đó, hãy liên hệ với chúng tôi qua kênh hỏi đáp thông qua quy trình đã định sẵn của công ty chúng tôi. Sau khi xác minh danh tính của người đưa ra yêu cầu, chúng tôi sẽ tiết lộ cho bạn hoặc chỉnh sửa/xóa thông tin trong thời gian hợp lý.</p>
            <h2>Trung tâm hỗ trợ khách hàng</h2>
            <p>Nếu bạn muốn kiểm tra thông tin cá nhân của mình, vui lòng liên hệ với bộ phận đã trả lời câu hỏi của bạn hoặc qua chi tiết liên hệ mà công ty chúng tôi cung cấp cho bạn khi bạn cung cấp thông tin cá nhân của mình.</p>
            <p>Nếu bạn không biết nên liên hệ với ai hoặc nếu bạn muốn hỏi về thông tin cá nhân mà bạn đã cung cấp trên trang web của chúng tôi, vui lòng sử dụng biểu mẫu câu hỏi.</p>
            <h2>Quản lý thông tin cá nhân</h2>
            <p>Quản trị viên Trang web của chúng tôi duy trì hoạt động quản lý nghiêm ngặt thông tin cá nhân đã thu thập được và các biện pháp thích hợp được thực hiện nhằm ngăn chặn sử dụng, tiết lộ hoặc sửa đổi trái phép thông tin đó. Khi các điều khoản sử dụng cụ thể được đăng trên Trang web, những điều khoản sử dụng đó sẽ được ưu tiên áp dụng so với "Chính sách về quyền riêng tư" này.</p>
            <h2>Xử lý thông tin cá nhân</h2>
            <p>Khi bạn đặt câu hỏi, đề nghị cung cấp ca-ta-lô hoặc khi chúng tôi mời người tham gia, v.v., bạn sẽ được yêu cầu nhập thông tin cá nhân trên trang web của chúng tôi. Chúng tôi cố gắng bảo vệ thông tin cá nhân bằng cách thực hiện các biện pháp kiểm soát bảo mật dựa trên Chính sách về quyền riêng tư này.</p>
            <p>Trong trường hợp khác ngoài các trường hợp nêu trên, bạn có thể truy cập trang web của chúng tôi mà không cần phải tiết lộ thông tin cá nhân.</p>
            <h2>Sử dụng bọ web</h2>
            <p>Bọ web được nhúng vào một số trang trên trang web của chúng tôi để kiểm tra số lần các trang cụ thể đã được truy cập. Dữ liệu thống kê nhận được bằng bọ web được dùng để cải tiến trang web của chúng tôi. Ví dụ như quảng cáo cho các trang web mà các công ty đối tác của chúng tôi vận hành có thể được hiển thị dựa trên lịch sử duyệt của bạn trên trang web của chúng tôi, v.v.</p>
            <h2>Sử dụng nhật ký truy cập</h2>
            <p>Khi bạn sử dụng trang web của chúng tôi, nhật ký truy cập bao gồm địa chỉ IP của bạn sẽ được ghi lại. Thông tin này được sử dụng để theo dõi việc bạn truy cập vào trang web của chúng tôi chứ không được sử dụng để nhận dạng người dùng, trừ các trang yêu cầu xác thực người dùng.</p>
            <h2>Thông tin cá nhân tại các trang web bên thứ ba</h2>
            <p>Chúng tôi không chịu trách nhiệm theo bất kỳ cách nào đối với việc thu thập thông tin cá nhân tại các trang web do các công ty khác vận hành được giới thiệu trên trang web của chúng tôi.</p>
            <h2>Hiểu biết khác</h2>
            <p>
              Công ty chúng tôi nỗ lực bảo vệ thông tin cá nhân của bạn, tuy nhiên chúng tôi không thể đảm bảo bảo mật thông tin khi thông tin được chuyển cho chúng tôi. Mỗi khách hàng phải chịu trách nhiệm đối với việc truyền dữ liệu an toàn. Chúng tôi khuyên bạn nên áp dụng các biện pháp đề phòng về bảo mật dữ liệu khi kết nối với Internet. Công ty chúng tôi có thể thay đổi "Chính sách về quyền
              riêng tư" này bất cứ lúc nào. Trong trường hợp này, thông tin sẽ có hiệu lực khi được đăng lên Trang web của công ty chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
